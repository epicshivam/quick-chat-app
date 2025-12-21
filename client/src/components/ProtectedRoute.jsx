import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from './../apiCalls/users';

function ProtectedRoute({children}){
    
    const [user,setUser] = useState(null);

    const navigate = useNavigate();
 
    const getloggedInUser = async () => {
        console.log("API called");
        let response = null;
        try{
            response = await getLoggedUser();
            if(response.success) {
                setUser(response.data);
            } else {
                navigate("/");
            }
        }catch(error){
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