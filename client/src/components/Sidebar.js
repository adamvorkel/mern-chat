import React from 'react';

import Conversations from './Conversations';
import Contacts from './Contacts';

const Sidebar = ({ id }) => {
    return(
        <div>
            <h1>Sidebar</h1>
            <Conversations />
            <Contacts />
            <span>Your Id: <span>{id}</span></span>
        </div>
    );
};

export default Sidebar;