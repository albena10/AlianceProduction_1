import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Main from './pages/MainPage/Main'
import About from "./pages/AboutCompany/About";
import Marks from './pages/OwnMarks/Marks'
const App = () => {
    return (
     <BrowserRouter>
         <Routes>
             <Route element={<Layout />}>
                 <Route path="/" element={<Main />} />
                 <Route path="/AboutCompany" element={<About />} />
                 <Route path="/OwnMarks" element={<Marks />} />
             </Route>
         </Routes>
     </BrowserRouter>
    );
};

export default App;