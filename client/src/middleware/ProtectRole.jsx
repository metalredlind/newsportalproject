import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Unable from './Unable';

const ProtectRole = ({role}) => {
    const userInfo = {
        name: "Admin1",
        role: "admin"
    }

    if (userInfo.role === role) {
        return <Outlet />
    } else {
        return <Navigate to='/dashboard/unable-access' />
    }
};

export default ProtectRole;