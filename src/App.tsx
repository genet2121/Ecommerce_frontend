import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MyComponent from "./Views/MyComponent";

function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyComponent />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default App;