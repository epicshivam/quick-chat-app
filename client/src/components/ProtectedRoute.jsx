import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../apiCalls/users";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../redux/loaderSlice";
import { setUser } from "../redux/usersSlice";
import { toast } from "react-hot-toast";

function ProtectedRoute({ children }) {

  const user = useSelector(state => state.userReducer?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    try {
      dispatch(showLoader());

      const response = await getLoggedUser();

      dispatch(hideLoader());

      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        toast.error(response.message);
        navigate("/login", { replace: true });
      }

    } catch (error) {
      dispatch(hideLoader());
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUser();
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  if (!user) return null;

  return children;
}

export default ProtectedRoute;
