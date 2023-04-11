import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {

    const counter = useSelector(state => state.counter)
   
    if( counter > 50){
        return <Outlet/>
    }else{
        return <Navigate to={'/login'}/>
    }

};

export default ProtectedRoutes;