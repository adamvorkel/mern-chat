import React from 'react';

import Sidebar from './Sidebar';

const Dashboard = ({ id }) => {
    return (
        <div>
            <Sidebar id={id} />
            <h1>Dashboard</h1>
            {id}
        </div>
    )
};

export default Dashboard;