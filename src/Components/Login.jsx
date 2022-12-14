import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from '../Api/axios'; 
import Home from './Home';
// import useAuth from '../Custom Hooks/useAuth';
import useInput from '../Custom Hooks/useInput';
import useToggle from '../Custom Hooks/useToggle';
import { Helmet } from 'react-helmet-async';
// const LOGIN_URL = ('/auth/login')

const Login = () => {
  // const { setAuth } = useAuth();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errorRef = useRef();

  const [email, emailAtt] = useInput('email', '');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [check, toggleCheck] = useToggle('persist', false)
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrorMsg('');
  }, [email, password])

  const inputHandler = (e) => {
    setInputText(e.target.value)
  };

  const userAuthe = [
    {
      email: 'altschool@email.com',
      password: 'altschool'
    },
    {
      email: 'oladele@email.com',
      password: 'oladele'
    }
  ]
  const getInfo = () => {
    let email = document.getElementById('exampleInputemail1').value
    let password = document.getElementById('exampleInputPassword1').value
    for(let i = 0; i < userAuthe; i++){
      if (email === userAuthe[i].email && password === userAuthe[i].password){
        console.log(`${email} is logged in!!!`)
        setLoggedIn(true);
      } else {
        console.log('Incorrect Email or Password')
      }
    }
  }

  return (
    <>
      {loggedIn ? (
      <Home  />
      ) : (

        <div >
          <Helmet>
            <title>Login</title>
            <meta name='description' content="Login to navigate to the home page."/>
            <link rel="canonical" href="/login" />
          </Helmet>
          <div >
            <div className="card-body ">
              <form onSubmit={getInfo} className='form'>
          <p ref={errorRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                <div className="form-group">
                  <h3>START FOR FREE</h3>
                  <h1>Login</h1>
                  <h3>Not a member? <NavLink to='/login'>Sign Up</NavLink></h3>
                  <label htmlFor="exampleInputemail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputemail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={inputHandler}
                    onClick={inputText}
                    {...emailAtt}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    // required
                  />
                </div>
                <div className="form-group form-check">
                  <input 
                  type="checkbox" 
                  className="form-check-input" id="exampleCheck1" 
                  onChange={toggleCheck}
                  checked={check}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Trust this Device</label>
                </div>
                <button className="btn btn-primary" onClick={getInfo}>Login</button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Login