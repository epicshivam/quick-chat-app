import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from './../apiCalls/users';
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../redux/loaderSlice";

function ProtectedRoute({children}){
    
    const [user,setUser] = useState(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();
 
    const getloggedInUser = async () => {
        console.log("API called");
        let response = null;
        try{
            dispatch(showLoader())
            response = await getLoggedUser();
            dispatch(hideLoader())
            if(response.success) {
                setUser(response.data);
            } else {
                navigate("/");
            }
        }catch(error){
            dispatch(hideLoader())
            navigate('/login');
        }
    }


    useEffect(() => {
        if(localStorage.getItem('token')){
            getloggedInUser();
        }else{
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <p>Welcome, {user?.firstName + " " + user?.lastName}</p>
            { children }
        </div>
    );
}

export default ProtectedRoute;