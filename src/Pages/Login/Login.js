import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogIn = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center">Log In</h2>
          <div className="">
            <div>
              <form className="mt-9" onSubmit={handleSubmit(handleLogIn)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="input input-bordered w-full mb-2"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    <span className="label-text-alt">Forgot Password?</span>
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn btn-block btn-accent"
                  value="Log In"
                />
                <p className="text-center mt-2">
                  New to Doctors Portal?{" "}
                  <Link className="text-secondary">Create an Account</Link>{" "}
                </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-accent btn-block">
                  Continue With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
