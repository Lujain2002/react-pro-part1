import axios from 'axios';
import './register.css';
import { object, string } from 'yup';
import React, { useState } from 'react'

export default function Register() {
    const[user,setUser]=useState({
        userName:'',
        email:'',
        password:'',
        image:'',
    });
    const[error,setError]=useState([]);
    const handelChange = (e)=>{
        const{name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        });
    };
   
    const handelImageChange = (e)=>{
        const {name,files}=e.target;
        setUser({
            ...user,
            [name]:files[0]
        });
        


    }
    const handelSubmit = async (e)=>{
        e.preventDefault();
       const validate=  await validateData();
       console.log(validate);
       const formData = new FormData();
        formData.append('userName',user.userName);
        formData.append('email',user.email);
        formData.append('password',user.password);
        formData.append('image',user.image);
        const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,formData);
        console.log(data);
    };
    const validateData= async()=>{
        const RegisterSchema=object({
            UserName:string().min(3).max(20).required(),
            email:string().email(),
            password:string().min(8).max(20).required(),
            image:string().required(),
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
        <h2>Sign Up</h2>
       
        <input type="text" value={user.userName} name="userName" onChange={handelChange} placeholder='User Name'/>
       
       
        <input type="email" value={user.email} name="email" onChange={handelChange} placeholder='Email' />
        
        
        <input type="password" value={user.password} name="password" onChange={handelChange} placeholder='Password'/>

        
        <input type="file"  name="image" onChange={handelImageChange} placeholder='Image' />
        
        <button type="submit">Sign Up</button>
        {error.length>0?error.map(error=>
        <p className='error'>{error}</p>):''}
    </form>
    </>
  )
}

