import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { authProvider } from '../../../Contexts/Authcontext';
import useToken from '../../../Hooks/useToken';

const Register = () => {
  const {createUser,userUpdate}= useContext(authProvider)
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.from?.state?.pathname || '/';
 
    const [userEmail,setUserEmail] = useState("")
    const userToken = useToken(userEmail)
    if(userToken){
      navigate(from,{replace:true})
    }
    const handleRegister = data=>{
        const {name,email,password} = data;
        console.log(email,password,name)
        createUser(email,password)
        .then(result => {
          console.log(result.user)
          const userInfo = {
            displayName : name
          }
          userUpdate(userInfo)
          .then(() =>{})
          .catch(err => console.error(err))
          saveUser(name,email)
        } )
        .then(err => console.error(err))
    }

    //sending user data to database
    const saveUser = (name,email)=>{
      const user = {name,email}
      fetch('https://doctors-portal-server-omega-olive.vercel.app/users',{
        method:'POST',
        headers: {
          'content-type':"application/json"
        },
        body : JSON.stringify(user) 
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserEmail(email)
      })
      .catch(e => console.log(e))
    }

    //generating token and saving to localstorage
    // const getToken = (email)=>{
    //   fetch(`https://doctors-portal-server-omega-olive.vercel.app/jwt?email=${email}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     localStorage.setItem('doc_port_token',data.token)
    //     navigate(from,{replace:true})
    //   })
    //   .catch(err => console.log(err))
    // }

  return (
    <div className="flex h-[600px] items-center justify-center ">
      <div className="w-96 shadow-xl p-6 rounded-xl">
        <h3 className="text-2xl text-center mb-7">Register</h3>
        <form className="w-full" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered w-full"
              aria-invalid={errors.name ? "true" : "false"} 
            />
            {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full"
              aria-invalid={errors.email ? "true" : "false"} 
            />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required",minLength: {value:6,message:"Password should be atleast 6 characters."} })}
              type="password"
              className="input input-bordered w-full"
              aria-invalid={errors.password ? "true" : "false"} 
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
          </div>
          
          <button type="submit" className="btn btn-accent w-full mt-4">Register</button>
          <p className="text-center text-sm mt-[6px]">Already have an account?<Link to='/login' className="text-secondary">Login</Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  )
}

export default Register