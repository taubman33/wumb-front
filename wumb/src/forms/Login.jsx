import React from 'react'

const Login = (props) =>
{

  return (

    <div>
      <h2>Login to your existing account!</h2>
      <form onSubmit={(e) =>
      {
        e.preventDefault()
        props.handleLogin()
      }} >

        <p>Email:</p>
        
        <input name="email" 
               type="text" 
            //    value={props.formData.email}
               value="" 
               onChange={props.handleChange} />

        <p>Password:</p>

        <input name="password"
               type="password" 
            //    value={props.formData.password} 
               value= ""
               onChange={props.handleChange} />
        <button className="button">Login</button>
      </form>
    </div>
  )
}

export default Login