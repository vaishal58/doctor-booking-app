import React, { useState } from 'react'

const Login = () => {
  const [state,setstate]=useState('Sign Up')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const onSubmitHandler=async(event)=>{
   event.preventDefault();
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state==='Sign Up' ? "Sign up" : "Login"} to book appointment</p>
        {state==="Sign Up" && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setName(e.target.name)} value={name} required></input>
        </div>}
        
         <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e)=>setEmail(e.target.email)} value={email} required></input>
        </div>
         <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=>setPassword(e.target.password)} value={password} required></input>
        </div>

        <button className='bg-blue-600 text-white w-full py-2 rounded-md text-base'>{state==='Sign Up' ? "Create Account" : "Login"}</button>
       
       {
        state=='Sign Up'
        ? <p>Aldready have an account? <span onClick={()=>setstate('Login')} className='text-blue-600 underline cursor-pointer'>Login here</span></p>
        :<p>Create a new account ? <span onClick={()=>setstate('Sign Up')} className='text-blue-600 underline cursor-pointer'>Click here</span></p>
       }
       </div>
    </form>
  )
}

export default Login
