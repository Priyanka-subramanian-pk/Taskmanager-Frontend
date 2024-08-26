// import React, { useState } from "react";
// import Button from "../components/button/Button";
// import Dropdown from "../components/inputfield/Dropdown";
// // import Card from "../components/card/Card";
// import useFetchTasks from "../services/apiHooks/taskServices/fetchTasks";
// import { DragDropContext } from "react-beautiful-dnd";
// import Column from "../components/column/Column";

// const HomePage = () => {
//   const [completed, setCompleted] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
//   const [backlog, setBacklog] = useState([]);
//   const [inReview, setInReview] = useState([]);

//   const { tasks, loading, error } = useFetchTasks("/api/task/getalltasks");
//   setCompleted(tasks.filter((task) => task.completed));
//   setIncomplete(tasks.filter((task) => !task.completed));

//   const handleDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination || source.droppableId === destination.droppableId) return;

//     deletePreviousState(source.droppableId, draggableId);

//     const task = findItemById(draggableId, [
//       ...incomplete,
//       ...completed,
//       ...inReview,
//       ...backlog,
//     ]);

//     setNewState(destination.droppableId, task);
//   };

//   function deletePreviousState(sourceDroppableId, taskId) {
//     switch (sourceDroppableId) {
//       case "1":
//         setIncomplete(removeItemById(taskId, incomplete));
//         break;
//       case "2":
//         setCompleted(removeItemById(taskId, completed));
//         break;
//       case "3":
//         setInReview(removeItemById(taskId, inReview));
//         break;
//       case "4":
//         setBacklog(removeItemById(taskId, backlog));
//         break;
//     }
//   }
//   function setNewState(destinationDroppableId, task) {
//     let updatedTask;
//     switch (destinationDroppableId) {
//       case "1": // TO DO
//         updatedTask = { ...task, completed: false };
//         setIncomplete([updatedTask, ...incomplete]);
//         break;
//       case "2": // DONE
//         updatedTask = { ...task, completed: true };
//         setCompleted([updatedTask, ...completed]);
//         break;
//       case "3": // IN REVIEW
//         updatedTask = { ...task, completed: false };
//         setInReview([updatedTask, ...inReview]);
//         break;
//       case "4": // BACKLOG
//         updatedTask = { ...task, completed: false };
//         setBacklog([updatedTask, ...backlog]);
//         break;
//     }
//   }
//   function findItemById(id, array) {
//     return array.find((item) => item.id == id);
//   }

//   function removeItemById(id, array) {
//     return array.filter((item) => item.id != id);
//   }

//   const options = [
//     { value: "recent", label: "Recent" },
//     { value: "old", label: "Old" },
//     { value: "option", label: "Option" },
//   ];
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleDropdownChange = (option) => {
//     setSelectedOption(option);
//     console.log("Selected Option:", option);
//   };

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const handleDelete = () => {
//     console.log("Delete action");
//   };

//   const handleEdit = () => {
//     console.log("Edit action");
//   };

//   const handleViewDetails = () => {
//     console.log("View Details action");
//   };

//   return (
//     <>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className=" m-10 bold-Inter">
//           <Button
//             buttonText="Add Task"
//             type="submit"
//             className="w-1/6 cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue rounded-md  "
//           />
//           <div className="grid grid-cols-5 border p-5 rounded-md my-5 shadow-lg">
//             <div className="col-span-3 ">
//               <div className="flex gap-3 items-center">
//                 <p>Search :</p>
//                 <div className="border w-1/2 rounded-md bg-red-400">
//                   <input
//                     type="text"
//                     className="p-2 w-full border-none outline-none bg-custom-white  text-sm"
//                     placeholder="Search"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex  col-span-2 items-center justify-end gap-2">
//               <h5>Sort By : </h5>

//               <div className="w-1/4 ">
//                 <Dropdown
//                   title="Select an Option"
//                   options={options}
//                   placeholder="Select"
//                   value={selectedOption}
//                   onChange={handleDropdownChange}
//                   name="exampleDropdown"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="border  rounded-md">
//             <div className="grid grid-cols-3 gap-3 text-custom-white">
//               <Column title={"TO DO"} tasks={incomplete} id={"1"} />
//               <Column title={"DONE"} tasks={completed} id={"2"} />
//               <Column title={"IN REVIEW"} tasks={inReview} id={"3"} />
//               <Column title={"BACKLOG"} tasks={backlog} id={"4"} />
//             </div>
//           </div>
//         </div>
//       </DragDropContext>
//     </>
//   );
// };

// export default HomePage;




// import React, { useState, useEffect } from "react";
// import Button from "../components/button/Button";
// import Dropdown from "../components/inputfield/Dropdown";
// import useFetchTasks from "../services/apiHooks/taskServices/fetchTasks";
// import { DragDropContext } from "react-beautiful-dnd";
// import Column from "../components/column/Column";

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState({
//     todo: [],
//     inprogress: [],
//     done: [],
//     backlog: [],
//   });

//   const { tasks: fetchedTasks, loading, error } = useFetchTasks("/api/task/getalltasks");

//   // Categorize tasks when they are fetched
//   useEffect(() => {
//     if (fetchedTasks) {
//       categorizeTasks(fetchedTasks);
//     }
//   }, [fetchedTasks]);

//   const categorizeTasks = (tasks) => {
//     const todo = tasks.filter(task => task.taskStatus === "todo");
//     const inprogress = tasks.filter(task => task.taskStatus === "inprogress");
//     const done = tasks.filter(task => task.taskStatus === "done");
//     const backlog = []; // Assuming "backlog" is represented by a different status, adjust accordingly
    
//     setFilteredTasks({ todo, inprogress, done, backlog });
//   };

//   console.log("filteredTasks",filteredTasks)



//   const handleDragEnd = (result) => {
//       console.log("koooiiii")
//     const { destination, source, draggableId } = result;
//      console.log("dragableId",draggableId);
//     if (!destination || source.droppableId === destination.droppableId) return;

//     const movedTask = tasks.find(task => task._id === draggableId);
//     movedTask.taskStatus = destination.droppableId;

//     setTasks(tasks.map(task => task._id === draggableId ? movedTask : task));
//     categorizeTasks(tasks);
//   };

//   const handleDelete = (taskId) => {
//     console.log("Delete action for task:", taskId);
//   };

//   const handleEdit = (taskId) => {
//     console.log("Edit action for task:", taskId);
//   };

//   const handleViewDetails = (taskId) => {
//     console.log("View Details action for task:", taskId);
//   };

//   const options = [
//     { value: "recent", label: "Recent" },
//     { value: "old", label: "Old" },
//     { value: "option", label: "Option" },
//   ];
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleDropdownChange = (option) => {
//     setSelectedOption(option);
//     console.log("Selected Option:", option);
//   };

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className="m-10 bold-Inter">
//           <Button
//             buttonText="Add Task"
//             type="submit"
//             className="w-1/6 cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue rounded-md"
//           />
//           <div className="grid grid-cols-5 border p-5 rounded-md my-5 shadow-lg">
//             <div className="col-span-3">
//               <div className="flex gap-3 items-center">
//                 <p>Search :</p>
//                 <div className="border w-1/2 rounded-md bg-red-400">
//                   <input
//                     type="text"
//                     className="p-2 w-full border-none outline-none bg-custom-white text-sm"
//                     placeholder="Search"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex col-span-2 items-center justify-end gap-2">
//               <h5>Sort By :</h5>
//               <div className="w-1/4">
//                 <Dropdown
//                   title="Select an Option"
//                   options={options}
//                   placeholder="Select"
//                   value={selectedOption}
//                   onChange={handleDropdownChange}
//                   name="exampleDropdown"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="border rounded-md">
//             <div className="grid grid-cols-4 gap-3 text-custom-white">
//               <Column
//                 title={"TO DO"}
//                 tasks={filteredTasks.todo}
//                 id={"todo"}
//                 handleDelete={handleDelete}
//                 handleEdit={handleEdit}
//                 handleViewDetails={handleViewDetails}
//               />
//               <Column
//                 title={"IN PROGRESS"}
//                 tasks={filteredTasks.inprogress}
//                 id={"inprogress"}
//                 handleDelete={handleDelete}
//                 handleEdit={handleEdit}
//                 handleViewDetails={handleViewDetails}
//               />
//               <Column
//                 title={"DONE"}
//                 tasks={filteredTasks.done}
//                 id={"done"}
//                 handleDelete={handleDelete}
//                 handleEdit={handleEdit}
//                 handleViewDetails={handleViewDetails}
//               />
//               <Column
//                 title={"BACKLOG"}
//                 tasks={filteredTasks.backlog}
//                 id={"backlog"}
//                 handleDelete={handleDelete}
//                 handleEdit={handleEdit}
//                 handleViewDetails={handleViewDetails}
//               />
//             </div>
//           </div>
//         </div>
//       </DragDropContext>
//     </>
//   );
// };

// export default HomePage;



// import React, { useState, useEffect } from 'react';
// import Button from '../components/button/Button';
// import Dropdown from '../components/inputfield/Dropdown';
// import useFetchTasks from '../services/apiHooks/taskServices/fetchTasks';
// import Column from '../components/column/Column';
// import useUpdateTask from '../services/apiHooks/taskServices/updateTasks';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState({
//     todo: [],
//     inprogress: [],
//     done: [],
    
//   });


  
// //   const { tasks: fetchedTasks, loading, error } = useFetchTasks('/api/task/getalltasks');
// const { tasks: fetchedTasks, loading: fetchingLoading, error: fetchingError } = useFetchTasks('/api/task/getalltasks');

// // Updating a task
// const { updateTask, loading: updatingLoading, error: updatingError, success } = useUpdateTask(`/api/task/updatetask/id`);
  

//   useEffect(() => {
//     if (fetchedTasks) {
//       categorizeTasks(fetchedTasks);
//     }
//   }, [fetchedTasks]);

//   const categorizeTasks = (tasks) => {
//     const todo = tasks.filter(task => task.taskStatus === 'todo');
//     const inprogress = tasks.filter(task => task.taskStatus === 'inprogress');
//     const done = tasks.filter(task => task.taskStatus === 'done');

//     setFilteredTasks({ todo, inprogress, done});
//   };

//   const moveCard = (dragIndex, hoverIndex, columnId) => {
//     updateTask()
    
//     const updatedTasks = [...tasks];
   
//     const [removed] = updatedTasks.splice(dragIndex, 1);
//     removed.taskStatus = columnId;
//     updatedTasks.splice(hoverIndex, 0, removed);

//     setTasks(updatedTasks);
//     categorizeTasks(updatedTasks);
//   };

//   const handleDelete = (taskId) => {
//     console.log('Delete action for task:', taskId);
//   };

//   const handleEdit = (taskId) => {
//     console.log('Edit action for task:', taskId);
//   };

//   const handleViewDetails = (taskId) => {
//     console.log('View Details action for task:', taskId);
//   };

//   const options = [
//     { value: 'recent', label: 'Recent' },
//     { value: 'old', label: 'Old' },
//     { value: 'option', label: 'Option' },
//   ];
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleDropdownChange = (option) => {
//     setSelectedOption(option);
//     console.log('Selected Option:', option);
//   };

//   if (fetchingLoading || updatingLoading) {
//     return <p>Loading...</p>;
//   }

//   if (fetchingError) {
//     return <p>Error fetching tasks: {fetchingError}</p>;
//   }

//   if (updatingError) {
//     return <p>Error updating task: {updatingError}</p>;
//   }

//   return (
//     <>
//       <div className="m-10 bold-Inter">
//         <Button
//           buttonText="Add Task"
//           type="submit"
//           className="w-1/6 cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue rounded-md"
//         />
//         <div className="grid grid-cols-5 border p-5 rounded-md my-5 shadow-lg">
//           <div className="col-span-3">
//             <div className="flex gap-3 items-center">
//               <p>Search :</p>
//               <div className="border w-1/2 rounded-md bg-red-400">
//                 <input
//                   type="text"
//                   className="p-2 w-full border-none outline-none bg-custom-white text-sm"
//                   placeholder="Search"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex col-span-2 items-center justify-end gap-2">
//             <h5>Sort By :</h5>
//             <div className="w-1/4">
//               <Dropdown
//                 title="Select an Option"
//                 options={options}
//                 placeholder="Select"
//                 value={selectedOption}
//                 onChange={handleDropdownChange}
//                 name="exampleDropdown"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="border rounded-md">
//           <div className="grid grid-cols-3 gap-3 text-custom-white">
//             <Column
//               title={"TO DO"}
//               tasks={filteredTasks.todo}
//               id={"todo"}
//               moveCard={moveCard}
//               handleDelete={handleDelete}
//               handleEdit={handleEdit}
//               handleViewDetails={handleViewDetails}
//             />
//             <Column
//               title={"IN PROGRESS"}
//               tasks={filteredTasks.inprogress}
//               id={"inprogress"}
//               moveCard={moveCard}
//               handleDelete={handleDelete}
//               handleEdit={handleEdit}
//               handleViewDetails={handleViewDetails}
//             />
//             <Column
//               title={"DONE"}
//               tasks={filteredTasks.done}
//               id={"done"}
//               moveCard={moveCard}
//               handleDelete={handleDelete}
//               handleEdit={handleEdit}
//               handleViewDetails={handleViewDetails}
//             />
          
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import Button from '../components/button/Button';
import Dropdown from '../components/inputfield/Dropdown';
import useFetchTasks from '../services/apiHooks/taskServices/fetchTasks';
import Column from '../components/column/Column';
import useUpdateTask from '../services/apiHooks/taskServices/updateTasks';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState({
    todo: [],
    inprogress: [],
    done: [],
  });

  const { tasks: fetchedTasks, loading: fetchingLoading, error: fetchingError } = useFetchTasks('/api/task/getalltasks');
  
  const { updateTask, loading: updatingLoading, error: updatingError, success } = useUpdateTask();

  useEffect(() => {
    if (fetchedTasks) {
      categorizeTasks(fetchedTasks);
    }
  }, [fetchedTasks]);

  const categorizeTasks = (tasks) => {
    const todo = tasks.filter(task => task.taskStatus === 'todo');
    const inprogress = tasks.filter(task => task.taskStatus === 'inprogress');
    const done = tasks.filter(task => task.taskStatus === 'done');
    setFilteredTasks({ todo, inprogress, done });
  };

  const moveCard = async (dragIndex, hoverIndex, columnId, taskId) => {

    console.log("iddddddddddddddddddd",taskId)
    console.log("statussssssss",columnId);
     // Update task status on the server
     const url = `/api/task/updatetask/${taskId}`;
     await updateTask(url, { taskStatus: columnId });
    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(dragIndex, 1);
    removed.taskStatus = columnId;
    updatedTasks.splice(hoverIndex, 0, removed);

    setTasks(updatedTasks);
    categorizeTasks(updatedTasks);

   
  };

  const handleDelete = (taskId) => {
    console.log('Delete action for task:', taskId);
  };

  const handleEdit = (taskId) => {
    console.log('Edit action for task:', taskId);
  };

  const handleViewDetails = (taskId) => {
    console.log('View Details action for task:', taskId);
  };

  const options = [
    { value: 'recent', label: 'Recent' },
    { value: 'old', label: 'Old' },
    { value: 'option', label: 'Option' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    console.log('Selected Option:', option);
  };

  if (fetchingLoading || updatingLoading) {
    return <p>Loading...</p>;
  }

  if (fetchingError) {
    return <p>Error fetching tasks: {fetchingError}</p>;
  }

  if (updatingError) {
    return <p>Error updating task: {updatingError}</p>;
  }

  return (
    <>
      <div className="m-10 bold-Inter">
        <Button
          buttonText="Add Task"
          type="submit"
          className="w-1/6 cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue rounded-md"
        />
        <div className="grid grid-cols-5 border p-5 rounded-md my-5 shadow-lg">
          <div className="col-span-3">
            <div className="flex gap-3 items-center">
              <p>Search :</p>
              <div className="border w-1/2 rounded-md bg-red-400">
                <input
                  type="text"
                  className="p-2 w-full border-none outline-none bg-custom-white text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="flex col-span-2 items-center justify-end gap-2">
            <h5>Sort By :</h5>
            <div className="w-1/4">
              <Dropdown
                title="Select an Option"
                options={options}
                placeholder="Select"
                value={selectedOption}
                onChange={handleDropdownChange}
                name="exampleDropdown"
              />
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="grid grid-cols-3 gap-3 text-custom-white">
            <Column
              title={"TO DO"}
              tasks={filteredTasks.todo}
              id={"todo"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
            <Column
              title={"IN PROGRESS"}
              tasks={filteredTasks.inprogress}
              id={"inprogress"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
            <Column
              title={"DONE"}
              tasks={filteredTasks.done}
              id={"done"}
              moveCard={moveCard}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleViewDetails={handleViewDetails}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
