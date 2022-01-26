import React from 'react';
import Login from '../Login/Login';
import SideDrawer from '../SideDrawer/SideDrawer';
import Client from '../UserAccess/AccessFrom/Client';

const Home = () => {
    return (
        <div>
            {/* <Login></Login> */}
            {/* <SideDrawer></SideDrawer> */}
            <Client></Client>
        </div>
    );
};

export default Home;