import React from 'react'

const Register = () => {
  return (
    <React.Fragment>
      <section className="login-form">
        <h1>Login Page</h1>
  
        <form action="" method="post" className="form">

          <div className="inputs">
            <label htmlFor="email">Full Name</label>
            <input type="text" required className="form-input" placeholder='full name' />
          </div>

          <div className="inputs">
            <label htmlFor="email">Email Address</label>
            <input type="email" required className="form-input" placeholder='email address'/>
          </div>

          <div className="inputs">
            <label htmlFor="password">Password</label>
            <input type="password" required className="form-input" placeholder='password'/>
          </div>

          <div className="inputs">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" required className="form-input" placeholder='confirm password'/>
          </div>
  
          <button type="submit" className='submit-button'>Register</button>
        </form>
      </section>
    </React.Fragment>
    );
}

export default Register
