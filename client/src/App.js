import React from 'react';
import {Routes, Route} from "react-router-dom";
import "./style.css";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Form from "./component/Form";
import DetailView from "./component/DetailView";

function App() {

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Form/>}/>
                <Route path='/:id' element={<DetailView />}/>
            </Routes>
        </div>
    );
}

export default App;


