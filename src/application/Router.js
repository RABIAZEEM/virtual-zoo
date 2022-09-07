 import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from '../App'
import Home from '../componentes/pages'
import Show from '../pages/Show'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<App/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Show' element={<Show/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Router
 
 