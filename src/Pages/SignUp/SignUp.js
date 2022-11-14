import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="card w-[400px] shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center">Log In</h2>
          <div className="">
            <div>
              <form className="mt-9">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input input-bordered w-full mb-2"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Email is required
                    </p>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Passwor is Required",
                      minLength: {
                        value: 6,
                        message: "Password Should be 6 Characters Or Longer",
                      },
                    })}
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    <span className="label-text-alt">Forgot Password?</span>
                  </label>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-block btn-accent"
                  value="Log In"
                />
                <p className="text-center mt-2">
                  Already Have an Account?
                  <Link className="text-secondary">Please Log In</Link>{" "}
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

export default SignUp;
