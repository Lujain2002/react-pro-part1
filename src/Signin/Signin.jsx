import axios from 'axios';
import React ,{useState}from 'react'
import { object, string } from 'yup';
import './signin.css'

export default function Signin() {
  const[user,setUser]=useState({
    email:'',
    password:'',
  
});
const[error,setError]=useState([]);
const handelChange = (e)=>{
  const{name,value}=e.target;
  setUser({
      ...user,
      [name]:value
  });
};
const handelSubmit = async (e)=>{
  e.preventDefault();
 const validate=  await validateData();
 console.log(validate);
 
  const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,{user});
  console.log(data);
};
const validateData= async()=>{
  const RegisterSchema=object({
      
      email:string().email().required(),
      password:string().required(),
     
  });
  try{
      await RegisterSchema.validate(user,{abortEarly:false});
      return true;
  }catch(error){
      console.log("validation error: ",error.errors);
   
      return false;

  }
};
  return (
    <>
     <form onSubmit={handelSubmit}>
        <h2>Sign In</h2>
       
       
       
       
        <input type="email" value={user.email} name="email" onChange={handelChange} placeholder='Email' />
        
        
        <input type="password" value={user.password} name="password" onChange={handelChange} placeholder='Password'/>
        
        <button type="submit">Sign In</button>
        {error.length>0?error.map(error=>
        <p className="error">{error}</p>):''}
    </form>
    </>
  )
}
