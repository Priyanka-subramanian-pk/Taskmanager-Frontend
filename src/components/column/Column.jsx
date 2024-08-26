// import React from "react";
// import Card from "../card/Card";
// import { Droppable } from "react-beautiful-dnd";

// export default function Column({ title, tasks, id, handleDelete, handleEdit, handleViewDetails }) {
//   return (
//     <div className="rounded-md p-3">
//       <div className="bg-custom-blue">
//         <p className="px-2">{title}</p>
//       </div>
//       <Droppable droppableId={id}>
//         {(provided, snapshot) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className={snapshot.isDraggingOver ? "dragging-over" : ""}
//           >
//             {tasks?.map((task, index) => (
//               <div className="my-3" key={task._id}>
//                 <Card
//                   title={task.taskTitle}
//                   description={task.taskDescription}
//                   date={task.createdAt}
//                   taskId={task._id}   // Pass the taskId prop
//                   index={index}       // Pass the index prop
//                   onDelete={() => handleDelete(task._id)}
//                   onEdit={() => handleEdit(task._id)}
//                   onViewDetails={() => handleViewDetails(task._id)}
//                 />
//               </div>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// }


// import React from 'react';
// import { useDrop } from 'react-dnd';
// import Card from '../card/Card';

// const Column = ({ title, tasks, id, handleDelete, handleEdit, handleViewDetails, moveCard }) => {
//   const [, drop] = useDrop({
//     accept: 'CARD',
//     drop: (item) => {
//       moveCard(item.index, 0); // Update to reflect actual column id or index if necessary
//     },
//   });

//   return (
//     <div ref={drop} className="rounded-md p-3">
//       <div className="bg-custom-blue">
//         <p className="px-2">{title}</p>
//       </div>
//       <div>
//         {tasks?.map((task, index) => (
//           <div className="my-3" key={task._id} >
//             <Card
//               title={task.taskTitle}
//               description={task.taskDescription}
//               date={task.createdAt}
//               taskId={task._id}
//               index={index}
//               onDelete={() => handleDelete(task._id)}
//               onEdit={() => handleEdit(task._id)}
//               onViewDetails={() => handleViewDetails(task._id)}
//               moveCard={(dragIndex, hoverIndex) => moveCard(dragIndex, hoverIndex, id)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;


import React from 'react';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';

const Column = ({ title, tasks, id, handleDelete, handleEdit, handleViewDetails, moveCard }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      moveCard(item.index, 0, id, item.taskId); // Pass the task ID along with other parameters
    },
  });

  return (
    <div ref={drop} className="rounded-md p-3">
      <div className="bg-custom-blue">
        <p className="px-2">{title}</p>
      </div>
      <div>
        {tasks?.map((task, index) => (
          <div className="my-3" key={task._id} >
            <Card
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.createdAt}
              taskId={task._id}
              index={index}
              onDelete={() => handleDelete(task._id)}
              onEdit={() => handleEdit(task._id)}
              onViewDetails={() => handleViewDetails(task._id)}
              moveCard={(dragIndex, hoverIndex) => moveCard(dragIndex, hoverIndex, id, task._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
