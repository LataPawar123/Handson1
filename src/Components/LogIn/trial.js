// /* eslint-disable react/jsx-no-duplicate-props */
// import { useForm } from "react-hook-form";
// import { Avatar, Card, MenuItem, TextField } from "@mui/material";
// import { useState } from "react";
// import Image from "../Images/signbg.jpg";
// import { Link, NavLink } from "react-router-dom";
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'



// function  Trial() {
//   const formSchema = Yup.object().shape({
// name: Yup.string().required('Name is mendatory'),
//     email: Yup.string().email().required(),
     
//     password: Yup.string().required('Password is mendatory')
//       .min(3, 'Password must be at 3 char long'),
//       .max(13,),
//     confirmPwd: Yup.string().min(4).max(10)
//       .required('Password is mendatory')
//       .oneOf([Yup.ref('password')], 'Passwords does not match'),
//     age:Yup.number().positive().integer().min(13).max(65).required('Age is mendatory')
//      no:Yup.number().required()
//   })
//   const formOptions = { resolver: yupResolver(formSchema) }

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     trigger,
//   } = useForm({resolver:yupResolver( formOptions)});
//   const [value, setValue] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };


//   // console.log(watch());

//   // console.log(errors.name)

//   return (

//     <Card>
//     <div className="container pt-5">
//       <div className="row justify-content-sm-center pt-5">
//         <div className="col-sm-6 shadow round pb-3">
         

// <div>
// MIx Sign up
// <Avatar sx={{ mt: 1,ml:35 }} src="Img" style={{ backgroundColour: "green", }} ></Avatar>
// </div>

          
//           <form onSubmit={handleSubmit(onSubmit)} style={{width:"200px",marginLeft:"200px"}}>
//             <div className="form-group">
            

//             <div></div>
//               <label className="col-form-label">Name:</label>
//               <input
//               label="name"
//               name="name"
//                 type="text"
//                 className={`form-control ${errors.name && "invalid"}`}
               
            
         
      

//             {...register('name')}
        
                
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name.message}</small>
//               )}


//             </div>
//             <div className="form-group" >
//               <label className="col-form-label">Age:</label>
//               <input
//                 type="text"
//                 placeholder="age"
//                 name="age"
//                 className={`form-control ${errors.age && "invalid"}`}
//                 {...register("age")}
                
//               />
//               {errors.age && (
//                 <small className="text-danger">{errors.age.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">Email:</label>
//               <input
//                 type="text"
               
//                 name="email"
//                 className={`form-control ${errors.email && "invalid"}`}
//                 {...register("email", { required: "Email is Required" ,
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Invalid email address",
//                 }})}
//                 onKeyUp={() => {
//                   trigger("email");
//                 }}
//               />
//                 <div className="invalid-feedback">{errors.email?.message}</div>
//               {/* {errors.email && (
//                 <small className="text-danger">{errors.email.message}</small>
//               )} */}
//             </div>
//             <div className="form-group">
//           <label>Password</label>
//           <input
//             name="password"
//             type="password"
//             placeholder="password"
      

//             {...register('password')}
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.password?.message}</div>
//         </div>

//         <div className="form-group">
//           <label>Name</label>
//           <input
//             name="namr"
//             type="text"
           
      

//             {...register('name')}
//             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.name ?.message}</div>
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             name="confirmPwd"
//             type="password"
//             {...register('confirmPwd')}
//             className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
//         </div>
        
//             <div className="form-group">
//               <label className="col-form-label">Phone:</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.phone && "invalid"}`}
//                 {...register("phone", { required: "Phone is Required",
//                 pattern: {
//                   value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
//                   message: "Invalid phone no",
//                 },
//                })}
//                onKeyUp={() => {
//                 trigger("phone");
//               }}
//               />
//               {errors.phone && (
//                 <small className="text-danger">{errors.phone.message}</small>
//               )}
//             </div>
           
             
//             <div className="form-group">
//   <label className="col-form-label">Gender:</label>
//   <div></div>
//   <select name="cars" id="cars" {...register("Gender", { required: "Gender is Required", })} onKeyUp={() => {
//                trigger("Gender");
//              }}>
//     <option value selected disabled hidden>Choose here</option>
//     <option value="Female">Female</option>
//     <option value="Male">Male</option>
//     <option value="Other">Other</option>
    
   
//   </select>
// </div>

//              {/* <input
//               type="submit"
//               className="btn btn-primary my-3">
//               Join
//                 </input>  */}
//                 <input type="submit" classname="btn btn-primary my-3" defaultValue="Send message" />

//            {/* <Link to="/LoginReg">
//           <button type="submit"  className="btn btn-primary my-3" >Join</button>
//         </Link> */}

//           </form>
//         </div>
//       </div>
//     </div>
//     </Card>
//   );
// }

// export default Trial;
  