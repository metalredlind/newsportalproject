import { Navigate, Outlet } from 'react-router-dom';

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