/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {users, loading} = useContext(AuthContext);

    if(loading){
        return <h1 className="font-bold text-center text-xl mt-5">Loading...</h1>
    }

    if(users) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
}

export default PrivateRoute
