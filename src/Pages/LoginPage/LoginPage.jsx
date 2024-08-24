import React from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.css";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Enter Your Name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            required
            placeholder="Enter Your Username"
            {...register("username")}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter Your Password"
            {...register("password")}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            required
            placeholder="Enter Your Mobile Number"
            {...register("mobileNumber")}
          />
        </div>
        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
