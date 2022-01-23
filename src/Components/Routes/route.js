import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Home/Home';
import Services from '../Sevices/Services';
import Users from '../Users/Users';

const route = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="services" element={<Services />} />
                        <Route path="users" element={<Users />} />
                    </Route>
                </Routes>
            </BrowserRouter>,
        </div>
    );
};

export default route;