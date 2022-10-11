// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'
// export default function ConfirmPassword() {
//   const formSchema = Yup.object().shape({
//     password: Yup.string()
//       .required('Password is mendatory')
//       .min(3, 'Password must be at 3 char long'),
//     confirmPwd: Yup.string()
//       .required('Password is mendatory')
//       .oneOf([Yup.ref('password')], 'Passwords does not match'),
//   })
//   const formOptions = { resolver: yupResolver(formSchema) }
//   const { register, handleSubmit, reset, formState } = useForm(formOptions)
//   const { errors } = formState
//   function onSubmit(data) {
//     console.log(JSON.stringify(data, null, 4))
//     return false
//   }
//   return (
//     <div className="container mt-5">
//       <h2>React Confirm Password Validation Example</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             name="password"
//             type="password"
//             {...register('password')}
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.password?.message}</div>
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
//         <div className="mt-3">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }



import React ,{useRef }from 'react'
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";

const ConfirmPassword = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  password.current = watch("password", "");
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };
 
  return (


   <>
   
   <form onSubmit={e => e.preventDefault()}>
      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <input
        name="password_repeat"
        type="password"
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  
   </>
  )
}

export default ConfirmPassword