import React, { useContext, useState } from 'react';
import EcomContext from '../../context/EcomContext';
import AuthContext from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';


function Signup() {
  const [email, setEmail] = useState(""); 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlasttName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { setItem } =useLocalStorage("auth-token");
  const { showHide } =useContext(EcomContext);
  const [state, dispatch] = useContext(AuthContext);
  const redirect = useNavigate();
 

  // if (isAuthenticated) {
  //   return <Navigate to="/" />
  // }

const registerHandler = async (e) => {
  e.preventDefault();
  console.log("Submitted")
  
  try {
    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        phone,
        role,
        password,
        confirmpassword,
      })
    })

    const data = await res.json();
    if (data.message) {
      showHide("error", data.message);
    }else if (data === "Password do not match") {
      showHide("error", "Password do not match");
    }else if (data === "User already exists") {
      showHide("error", "User already exists");
  }else {
    dispatch({ type: "setToken", payload: data.token });
    setItem(data.token)
    redirect("/");
    showHide("success", "You have successfully registered" );
  }
} catch (error) {
  console.log(error);
}


  return (
    <div>
       <div className="flex justify-center items-center h-screen w-[100%] head">
         <form  onSubmit={registerHandler}>
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl text-black block text-center font-semibold"><i class="color-black fa-solid fa-user"></i>Sign up</h1>
        <hr className="mt-3" />
            <div className="mt-3 text-white">
                <label for="firstName" className=" text-black text-base mb-2">firstName</label>
                <input type="text" name="" id="" placeholder="create username.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setfirstName (e.target.value)} />
            </div>
            <div className="mt-3 text-white">
                <label for="lasttName" className=" text-black text-base mb-2">lastName</label>
                <input type="text" name="" id="" placeholder="create username.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setlasttName (e.target.value)} />
            </div>
            <div className="mt-3 text-white">
           <label for="email" className=" text-black text-base mb-2">Email</label>
            <input type="email" name="" id="" placeholder="Input your email address..." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setEmail (e.target.value)} />
           </div>
            <div className="mt-3 text-white">
                <label for="phone" className=" text-black text-base mb-2">Phone</label>
                <input type="number" name="" id="" placeholder="Enter phone Number.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setPhone (e.target.value)} />
            </div>
            <div className="mt-3 text-white">
                <label for="password" className=" text-black text-base mb-2">Password</label>
                <input type="password" name="" id="" placeholder="Enter password.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setPassword (e.target.value)} />
            </div>
            <div className="mt-3 text-white">
                <label for="confirmpassword" className=" text-black text-base mb-2">confirm password</label>
                <input type="password" name="" id="" placeholder="Enter password again.." className="text-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 " onChange={(e) => setConfirmPassword (e.target.value)} />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label className="">Remember Me</label>
                </div>
            </div>
            <div className="mt-5">
                <button type="submit" className="border-2 p-7 bg-indigo-600 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Signup</button>
            </div>
        </div>
        </form>
      </div>
    
    </div>
  )
}
}

export default Signup;
