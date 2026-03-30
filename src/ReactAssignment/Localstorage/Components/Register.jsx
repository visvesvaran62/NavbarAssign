import React,{ useState } from 'react'

const Register= () => {
    const[form,setForm]=useState({name:"",email:"",password:""})
     
    const HandleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        // console.log(e.target.value);
        

    }
 const HandleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("userdetail",JSON.stringify(form))
      alert("saved successfully");
      setForm({name:"",email:"",password:""})
 }


  return (
    <>
    <form onSubmit={HandleSubmit} className='border  black-border mt-10 flex flex-col w-100' >
        <input  className='border w-50 mt-3 ml-2' type="text" name='name' placeholder='enter your name' value={form.name} onChange={HandleChange} /><br/>
        <input  className='border w-50 mt-3 ml-2' type="email" name='email' placeholder='enter your email' value={form.email} onChange={HandleChange}/><br/>
        <input  className='border w-50 mt-3 ml-2'type="password" name='password' placeholder='enter your password' value={form.password}onChange={HandleChange}/><br/>
        <input className='bg-amber-700 w-20 mb-2 ml-10  rounded-xl' type='submit'/>
    </form>
    
    
    
    </>
  )
}

export default Register
