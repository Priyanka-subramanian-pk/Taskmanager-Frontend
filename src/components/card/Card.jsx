// import React from "react";

// const Card = ({
//   title,
//   description,
//   date,
//   onDelete,
//   onEdit,
//   onViewDetails,
// }) => {


    
//   return (
//     <div className="bg-custom-lightBlue rounded-md p-4 ">
//       <h5 className="font-semibold text-lg text-black">{title}</h5>
//       <p className="text-sm text-gray-700 mt-2">{description}</p>
//       <div className="mt-4">
//         <p className="text-sm text-gray-500 text-xs">Created at : {date}</p>
//         <div className="flex items-center justify-end gap-3 mt-2 text-xs">
//           <div
//             onClick={onDelete}
//             className="bg-red-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-red-500"
//           >
//             Delete
//           </div>
//           <div
//             onClick={onEdit}
//             className="bg-blue-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-500"
//           >
//             Edit
//           </div>
//           <div
//             onClick={onViewDetails}
//             className="bg-blue-600 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-700"
//           >
//             View Details
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


// import React from "react";
// import { Draggable } from "react-beautiful-dnd";

// const Card = ({
//   title,
//   description,
//   date,
//   onDelete,
//   onEdit,
//   onViewDetails,
//   taskId,
//   index,
// }) => {
//   return (
//     <Draggable draggableId={`${taskId}`} index={index}>
//       {(provided, snapshot) => (
//         <div
//           className={`bg-custom-lightBlue rounded-md p-4 ${
//             snapshot.isDragging ? "dragging" : ""
//           }`}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <h5 className="font-semibold text-lg text-black">{title}</h5>
//           <p className="text-sm text-gray-700 mt-2">{description}</p>
//           <div className="mt-4">
//             <p className="text-sm text-gray-500 text-xs">Created at: {date}</p>
//             <div className="flex items-center justify-end gap-3 mt-2 text-xs">
//               <div
//                 onClick={onDelete}
//                 className="bg-red-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-red-500"
//               >
//                 Delete
//               </div>
//               <div
//                 onClick={onEdit}
//                 className="bg-blue-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-500"
//               >
//                 Edit
//               </div>
//               <div
//                 onClick={onViewDetails}
//                 className="bg-blue-600 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-700"
//               >
//                 View Details
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default Card;

// import React from "react";
// import { Draggable } from "react-beautiful-dnd";

// const Card = ({
//   title,
//   description,
//   date,
//   onDelete,
//   onEdit,
//   onViewDetails,
//   taskId,
//   index,
// }) => {
//   return (
//     <Draggable draggableId={`${taskId}`} index={index}>
//       {(provided, snapshot) => (
//         <div
//           className={`bg-custom-lightBlue rounded-md p-4 ${
//             snapshot.isDragging ? "dragging" : ""
//           }`}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <h5 className="font-semibold text-lg text-black">{title}</h5>
//           <p className="text-sm text-gray-700 mt-2">{description}</p>
//           <div className="mt-4">
//             <p className="text-sm text-gray-500 text-xs">Created at: {date}</p>
//             <div className="flex items-center justify-end gap-3 mt-2 text-xs">
//               <div
//                 onClick={onDelete}
//                 className="bg-red-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-red-500"
//               >
//                 Delete
//               </div>
//               <div
//                 onClick={onEdit}
//                 className="bg-blue-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-500"
//               >
//                 Edit
//               </div>
//               <div
//                 onClick={onViewDetails}
//                 className="bg-blue-600 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-700"
//               >
//                 View Details
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default Card;



import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'CARD';

const Card = ({ title, description, date, onDelete, onEdit, onViewDetails, taskId, index, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { taskId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-custom-lightBlue rounded-md p-4 ${isDragging ? 'dragging' : ''}`}
    >
      <h5 className="font-semibold text-lg text-black">{title}</h5>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
      <div className="mt-4">
        <p className="text-sm text-gray-500 text-xs">Created at: {date}</p>
        <div className="flex items-center justify-end gap-3 mt-2 text-xs">
          <div
            onClick={onDelete}
            className="bg-red-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-red-500"
          >
            Delete
          </div>
          <div
            onClick={onEdit}
            className="bg-blue-400 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-500"
          >
            Edit
          </div>
          <div
            onClick={onViewDetails}
            className="bg-blue-600 p-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-blue-700"
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
