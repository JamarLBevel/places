import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import Contact from './contact';
import Places from './places';

export default function Main(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<App/>}>
        <Route path='contact' element={<Contact/>}/>
        <Route path='places' element={<Places/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    );
}