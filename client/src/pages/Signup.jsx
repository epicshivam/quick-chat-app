import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {signupUser} from "./../apiCalls/auth.js"
const Signup = () => {

  const [user, setUser] = useState({firstName : "", lastName : "", email : "", password : ""});

  async function formSubmitHandler(event) {

    event.preventDefault();

    try {
      const response = await signupUser(user);
      setUser({
        firstName:"",
        lastName:"",
        email:"",
        password:""
      })

      if(response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (error) {
        alert(error?.response?.data?.message || error.message || "Something went wrong");
    }
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-800'>
      <div className='w-auto bg-zinc-500 rounded-xl text-center py-4 px-3'>
        <h1 className='text-semibold text-center text-2xl m-5 '>SignUp Page</h1>
        <form className='mx-5 flex flex-col' onSubmit={formSubmitHandler}>
          <div className='flex my-2'>
            <input className='bg-gray-100 px-4 py-2 text-l mx-1 rounded-sm' type="text" name="first-name" placeholder='First Name' value={user.firstName} onChange={(e) => setUser({...user , firstName : e.target.value})}/>
            <input className='bg-gray-100 px-4 py-2 text-l rounded-sm' type="text" name="last-name" placeholder='Last Name' value={user.lastName} onChange={(e) => setUser({...user, lastName : e.target.value})}/>
          </div>
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="email" name="email" placeholder='Email' value={user.email} onChange={(e) => setUser({...user , email : e.target.value})}/>
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="password" name="password" placeholder='Password' value={user.password} onChange={(e)=>setUser({...user, password : e.target.value})}/>
          <button className='text-xl bg-blue-200 my-5 p-2 border rounded-3xl focus:outline-none focus:ring-0 focus:ring-transparent' type="submit">Signup</button>
        </form>
        <h5>Already have an account? <Link to="/login" className='text-blue-600 underline'>Login Here</Link></h5>
      </div>
    </div>
  )
}

export default Signup
