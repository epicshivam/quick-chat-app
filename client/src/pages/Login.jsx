import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { loginUser } from '../apiCalls/auth.js';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../redux/loaderSlice.js';

const Login = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({email : "", password : ""});
  const navigate = useNavigate();

  async function formSubmitHandler(event) {
    event.preventDefault();

    try {
      dispatch(showLoader());
        const response = await loginUser(user);
      dispatch(hideLoader());

        setUser({
          email:"",
          password:""
        })

        toast.success(response.message);
        localStorage.setItem('token', response.token);
        navigate('/');

    } catch (error) {
      dispatch(hideLoader());
      toast.error(error.response?.data?.message || "Login Failed",{id:"login-error"});
    }

  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-800'>
      <div className='w-sm bg-zinc-500 rounded-xl text-center py-4 px-3'>
        <h1 className='text-semibold text-center text-2xl m-5 '>Login Page</h1>
        <form className='mx-5 flex flex-col' onSubmit={formSubmitHandler}>
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="email" name="email" placeholder='Email' value={user.email} onChange={(e) => setUser({...user , email : e.target.value})}/>
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="password" name="password" placeholder='Password' value={user.password} onChange={(e)=>setUser({...user, password : e.target.value})}/>
          <button className='text-xl bg-blue-200 my-5 p-2 border rounded-3xl focus:outline-none focus:ring-0 focus:ring-transparent' type="submit">Login</button>
        </form>
        <h5>New comer ? <Link to="/signup" className='text-blue-600 underline'>Signup Here</Link></h5>
      </div>
    </div>
  )
}

export default Login
