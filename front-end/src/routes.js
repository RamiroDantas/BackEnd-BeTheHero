import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Logon from '../src/Pages/Logon/index';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';

export default function MainRoutes(){
    return (
        <BrowserRouter>   
            <Routes>
                <Route
                    element={<Logon/>}
                    path='/'
                />

                <Route
                    element={<Register/>}
                    path='/register'
                />
                <Route
                    element={<Profile/>}
                    path='/profile'
                />
                <Route
                    element={<NewIncident/>}
                    path='/incidents/new'
                />
            </Routes>  
        </BrowserRouter>
    )
}
