import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="flex h-[600px] items-center justify-center ">
      <div className="w-96 shadow-xl p-6 rounded-xl">
        <h3 className="text-2xl text-center mb-7">Login</h3>
        <form className="w-full" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="input input-bordered w-full "
            />
          </div>
          <p>Forgot Password ?</p>
          <input className="btn btn-accent w-full mt-4" type="submit" />
          <p className="text-center text-sm mt-[6px]">New to Doctors Portal?<Link to='/register' className="text-secondary">Create new account</Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
