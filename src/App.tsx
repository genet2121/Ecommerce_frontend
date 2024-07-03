// // import React from "react";
// //import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// // import MyComponent from "./Views/MyComponent";

// // function App(){

// //     return (
// //         <BrowserRouter>
// //             <Routes>
// //                 <Route path="/" element={<MyComponent />} />
                
// //             </Routes>
// //         </BrowserRouter>
// //     );
// // }
// // export default App;

// // src/App.tsx
// // src/App.tsx
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('./Views/Home'));

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./Views/Home'));
// const Deals = lazy(() => import('./Views/Deals'));
// const Shop = lazy(() => import('./Views/Shop'));
const Shop = lazy(() => import('./Views/Shop'));
// const Sellers = lazy(() => import('./Views/Sellers'));
// const HowItWorks = lazy(() => import('./Views/HowItWorks'));
// const About = lazy(() => import('./Views/About'));
// const Contact = lazy(() => import('./Views/Contact'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/deals" element={<Deals />} /> */}
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/sellers" element={<Sellers />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
