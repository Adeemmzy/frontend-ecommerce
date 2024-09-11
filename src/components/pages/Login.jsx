import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
       
     <div className="flex justify-center items-center h-[100vh] w-3xl head">
        <div className="w-96 h[50vh] p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl text-black block text-center font-semibold"><i className="color-black fa-solid fa-user"></i> Login</h1>
        <hr />
            <div className="mt-3 text-white">
                <label for="username" className=" text-black text-base mb-2">Username</label>
                <input type="text" name="" id="" placeholder="Enter username.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " />
            </div>
            <div className="mt-3 text-white">
                <label for="password" className=" text-black text-base mb-2">Password</label>
                <input type="password" name="" id="" placeholder="Enter password.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " />
            </div>
            <div className="mt-5">
                <button type="submit" className="border-2 bg-white py-1 w-full rounded-md hover:bg-blue-200 text-black-700 font-semibold">Login</button>
            </div>
            <div className="mt-5 grid grid-cols-3 item-center border-gray-400 " >
              <hr className="border-gray-400" />
              <p className=" md-20 text-center text-sm">OR </p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white hover:bg-red-500 border py-2 w-full rounded-xl mt-5"><i className=" text-red-700 pr-2 fa-brands fa-google"></i>Login with Google</button>
            <div className="mt-3 flex justify-between items-center">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label>Remember Me</label>
                </div>
                <div>
                    <a href="#" className="text-indigo-600 font-semibold">Forget Password?</a>
                </div>
            </div>
            <div className="flex mt-5 item-center justify-center">
              <p>dont have an account? </p>
            </div>
              <button type="button" className="mt-5 mr-0 bg-white p-none w-full rounded-md hover:bg-blue-500 hover:text-black-700 font-semibold" ><Link to="/signup">Sign-up</Link></button>
        </div>
      </div>
    </div>


  )
}

export default Login
