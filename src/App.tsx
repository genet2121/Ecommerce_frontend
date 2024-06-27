// import React from "react";
//import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import MyComponent from "./Views/MyComponent";

// function App(){

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<MyComponent />} />
                
//             </Routes>
//         </BrowserRouter>
//     );
// }
// export default App;

// src/App.tsx
// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Views/Home'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;




