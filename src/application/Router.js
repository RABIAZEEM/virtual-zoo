 import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from '../App'
import Home from '../assets'
function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<App/>}/>
            <Route path='/Home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Router
 
 