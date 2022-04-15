const LoginModal = () =>{
  return (
    <div className="flex flex-col p-6 bg-white drop-shadow-md rounded-2xl m-auto">
      <p className="flex justify-center font-bold text-2xl">Login</p>
      <input type="text" name="email" placeholder="Email" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
      <input type="password" name="password" placeholder="Password" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
      <button className="bg-green-500 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-64 my-4 hover:bg-green-600">Login</button>
      <p className="flex justify-center font-bold text-sm mt-8">Don’t have account? <a className="text-green-400 ml-1 hover:text-green-500 cursor-pointer"> Sign Up</a></p>
    </div>
  )
}

export default LoginModal