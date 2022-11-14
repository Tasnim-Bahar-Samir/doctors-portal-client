import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { authProvider } from '../../../Contexts/Authcontext';

const Register = () => {
  const {createUser}= useContext(authProvider)
    const {register, formState:{errors}, handleSubmit} = useForm();
    const handleRegister = data=>{
        const {name,email,password} = data;
        console.log(email,password)
        createUser(email,password)
        .then(result => {
          console.log(result.user)
        } )
        .then(err => console.error(err))
    }
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
          <input className="btn btn-accent w-full mt-4" type="submit" />
          <p className="text-center text-sm mt-[6px]">Already have an account?<Link to='/login' className="text-secondary">Login</Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  )
}

export default Register