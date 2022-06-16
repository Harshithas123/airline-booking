import React, { useState } from "react";
import { firebaseAuth, firebaseDatabase } from '../../backend/firebasehandler.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref,set} from 'firebase/database';
import { useNavigate } from "react-router-dom";


function Home () {

  const [userInput ,setuserInput] = useState({
      Name:"",
      phonenumber:"",
      gender:"",
      emailId:"",
      password:"",
      confirmpassword:""
      
})
  
const nav = useNavigate( );

  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      const recordref=ref(firebaseDatabase,`STUDENT_RECORDS/${userInput.Name}`);
      await set(recordref,userInput);
      alert("acount created")
      nav("/Authpage")
      
    }catch(err){
      alert(err);
    
    }
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
  }
  return (
    <div className='data'>
      <input className ='inputs' placeholder='Name' name ='Name' type={'Name'} value = {userInput.Name} onChange={handleChange} />
      <input classname ='inputs' placeholder='phone number' name ='phonenumber' type={'number'} value = {userInput.phonenumber} onChange={handleChange}/>
      <input classname ='inputs' placeholder='gender' name ='gender' type={'Gender'} value = {userInput.gender} onChange={handleChange}/>
      <input classname='inputs' placeholder='emailId' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input classname='inputs' placeholder='password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
      <input classname='inputs' placeholder='confirm password' name ='confirmpassword' type={'password'} value = {userInput.confirmpassword} onChange={handleChange}/>
      
 <button onClick={handleClick}>sign Up</button>    </div>
   
  );
}

export default Home;