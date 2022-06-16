import '../client/user-login.css';
import {ref , set } from 'firebase/database';
import {useState} from'react';
import{firebaseAuth , firebaseDatabase} from '../backend/firebasehandler.js';
import { async } from '@firebase/util';

import { createUserWithEmailAndPassword} from 'firebase/auth';


function Authpage() {
  const [userInput ,setuserInput] = useState({emailId:"",password:""})


  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      alert("acount created")
      
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
    <div className='App'>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input classname='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>

 <button onClick={handleClick}>create account</button>
    </div>
   
  );
}

export default Authpage;