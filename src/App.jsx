// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/Router";



// function App() {
  

//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App


import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { router } from './routes/Router'; // Adjust the path as needed

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  );
}

export default App;
