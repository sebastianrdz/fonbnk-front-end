import React , { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const SignUpModal = ({setToggleLogin}) =>{

  const handleChange = useCallback(event => {
    setToggleLogin(!event.target.value)
  }, [setToggleLogin])

  return (
    <div className="flex flex-col p-6 bg-white drop-shadow-md rounded-2xl m-auto">
      <p className="flex justify-center font-bold text-2xl">Sign Up</p>
      <input type="text" name="email" placeholder="Email" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
      <input type="password" name="password" placeholder="Password" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
      <input type="password" name="password" placeholder="Confirm Password" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
      <NavLink to="/dashboard" exact><button className="bg-green-bnk-200 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-64 my-4 hover:bg-green-600">Sign Up</button></NavLink>
      <p className="flex justify-center font-bold text-sm mt-8">Aready have an account?<a onClick={handleChange} className="text-green-bnk-200 ml-1 hover:text-green-600 cursor-pointer"> Login</a></p>
    </div>
  )
}

export default SignUpModal