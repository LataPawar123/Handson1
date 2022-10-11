import { useForm } from "react-hook-form";
import { Avatar, Card, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import Image from "../Images/signbg.jpg";
import { Link, NavLink } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'



function  Loginmix() {
  const formSchema = Yup.object().shape({
   email: Yup.string().email().required('email is mendatory'),
   name: Yup.string().required('name is mendatory'),  
   password: Yup.string().required('Password is mendatory'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  mobno: Yup.number().required('no is required'),
    age:Yup.number().positive().integer().required('age is mendatory').min(13, 'age must be 13').max(65, 'age is too much'),
  
  })
  const formOptions = { resolver: yupResolver(formSchema) }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [value, setValue] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (

    <Card>
    <div className="container pt-5" style={{ml:"30px", marginLeft:"25%"}}>
      <div className="row justify-content-sm-center pt-5"  style={{mb:"30px",maxWidth:"800px",minHeight:"200px"}}>
        <div className="col-sm-6 shadow round pb-3" style={{mb:"30px",maxWidth:"800px",minHeight:"200px"}}>
         

<div >

<Avatar sx={{ mt: 2 ,ml:35 }} src="Img" style={{ backgroundColour: "green", marginLeft:"170px",  }} ></Avatar>
<h2> Sign up</h2>
</div>

          
          <form onSubmit={handleSubmit(onSubmit)} style={{width:"200px",marginLeft:"90px", padding:"1px"}}>
            <div className="form-group">
            

            <div></div>
              <label className="col-form-label">Name:</label>
              <input
              label="name"
              name="name"
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required", 
                min: {
                  value: 4,
                  message: "Name Should be atleast 4 characters long", 
                  max: {
                    value: 13,
                    message: "Name too long",
                  },
                },})}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group" >
              <label className="col-form-label">Age:</label>
              <input
                type="text"
                name="age"
                className={`form-control ${errors.age && "invalid"}`}
                {...register("age", {
                  required: "Age is Required",
                  min: {
                    value: 13,
                    message: "Minimum Required age is 13",
                  },
                  max: {
                    value: 65,
                    message: "Maximum allowed age is 65",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                onKeyUp={() => {
                  trigger("age");
                }}
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                name="email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
        </div>
        {/* <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
          
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
            {...register('confirmPwd')}
            onKeyUp={() => {
              trigger("confirmPwd");
            }}
          />
          {errors.confirmPwd && (
                <small className="text-danger">{errors.confirmPwd.message}</small>
              )}
        </div> */}
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                name="mobno"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
           
             
            <div className="form-group">
  <label className="col-form-label">Gender:</label>
  <div></div>
  <select name="cars" id="cars" {...register("Gender", { required: "Gender is Required", })} onKeyUp={() => {
               trigger("Gender");
             }}>
    <option value selected disabled hidden>Choose here</option>
    <option value="Female">Female</option>
    <option value="Male">Male</option>
    <option value="Other">Other</option>
    
   
  </select>
</div>

             {/* <input
              type="submit"
              className="btn btn-primary my-3">
              Join
                </input>  */}
                <input type="submit" classname="btn btn-primary my-3" defaultValue="Send message" />

           {/* <Link to="/LoginReg">
          <button type="submit"  className="btn btn-primary my-3" >Join</button>
        </Link> */}

          </form>
        </div>
      </div>
    </div>
    </Card>
  );
}

export default Loginmix;
  