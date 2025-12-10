import React from 'react'

const Signup = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-800'>
      <div className='w-auto bg-zinc-500 rounded-xl'>
        <h1 className='text-semibold text-center text-2xl m-5 '>SignUp Page</h1>
        <form className='mx-5 flex flex-col'>
          <div className='flex my-2'>
            <input className='bg-gray-100 px-4 py-2 text-l mx-1 rounded-sm' type="text" name="first-name" placeholder='First Name'/>
            <input className='bg-gray-100 px-4 py-2 text-l rounded-sm' type="text" name="last-name" placeholder='Last Name' />
          </div>
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="email" name="email" placeholder='Email' />
          <input className='bg-gray-100 px-4 py-2 text-l my-2 rounded-sm' type="password" name="password" placeholder='Password' />
          <button className='text-xl bg-blue-200 my-5 p-2 border rounded-3xl focus:outline-none focus:ring-0 focus:ring-transparent' type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
