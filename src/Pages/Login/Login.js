import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../../Contexts/Authcontext";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {userLogin} = useContext(authProvider)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate()
  const handleLogin = (data)=>{
    const {email,password} = data;
    userLogin(email,password)
    .then(result => {
      console.log(result.user)
      navigate(from,{replace:true})
    })
    .then(err => console.error(err))
    }
  return (
    <div className="flex h-[600px] items-center justify-center ">
      <div className="w-96 shadow-xl p-6 rounded-xl">
        <h3 className="text-2xl text-center mb-7">Login</h3>
        <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="text"
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
              {...register("password", { required: "Password is required" })}
              type="password"
              className="input input-bordered w-full"
              aria-invalid={errors.password ? "true" : "false"} 
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
          </div>
          <p>Forgot Password ?</p>
          <button type="submit" className="btn btn-accent w-full mt-4">Login</button>
          <p className="text-center text-sm mt-[6px]">New to Doctors Portal?<Link to='/register' className="text-secondary">Create new account</Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
