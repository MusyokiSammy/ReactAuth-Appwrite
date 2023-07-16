import React, { useEffect } from 'react'
import { useAuth } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {user} = useAuth()

    useEffect( () => {
        if (user) {
            navigate('/')
        }
    }, [])
  return (
    <React.Fragment>
      <section className="login-form">
        <h1>Login Page</h1>

        <form action="" method="post" className="form">
          <div className="inputs">
            <label htmlFor="email">Email Address</label>
            <input
              type="email "
              placeholder="email address"
              required
              className="form-input"
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              className="form-input"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Login
