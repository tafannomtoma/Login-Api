import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from '../Sevices/Services';

const route = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Services />} />
                    
                </Routes>
            </Router>
        </div>
    );
};

export default route;