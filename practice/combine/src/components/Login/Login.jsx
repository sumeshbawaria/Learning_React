import React, { useId } from 'react'
import {Container} from '../../index';

const MyInput = React.forwardRef(function MyInput({
  placeholder,
  label,
  type = 'text',
  className="",
  br,
  ...props
  },ref){

  const id = useId();

  return (
    <>
      {label && typeof label === "string" && (
        <label className='inline-block mb-1'
        htmlFor={id}>
          {label}
        </label>
        )}
        {br && <br/>}
      <input 
        type={type}
        placeholder={placeholder}
        className = {`w-80 mt-2 mb-4 outline-none rounded-md px-3 py-2 cursor-default ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
  </>
  )
})

function Login() {
  return (
    <>
      <Container>
      <div className="flex justify-center items-center py-5">
        <div className="bg-sky-300 w-fit p-4 rounded-lg">
        <h2 className='text-center'>Login</h2>
        <form>
          {/* <label htmlFor="">E-mail:</label><br />
          <input 
          type="email" 
          className='w-80 mt-2 mb-4 outline-none rounded-md p-1 cursor-default'
          placeholder='Enter your email address.'
          /><br /> */}

          <MyInput
            label="Email:"
            placeholder="Enter your E-mail"
            type='email'
            br
          /><br/>

          <MyInput
            label="Password:"
            placeholder="Password"
            type='password'
            br
          /><br/>

          <input type="submit" value="Submit" className='bg-white mt-2 py-1 px-3 rounded-md cursor-pointer'/>
        </form>
        </div>
      </div>
      </Container>
    </>
  )
}

export default Login