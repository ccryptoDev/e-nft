import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { user } from '../../actions/user'
import { RootState } from '../../actions/types';
import './auth.scss'

let validation = {
  email: false,
  password: false,
  verify: false,
}

const Login = () => {
  const dispatch = useDispatch();
  const [step1, setStep1] = useState(false)
  const [step2, setStep2] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyCode, setVerifyCode] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [verifyError, setVerifyError] = useState(false)
  const [validate, setValidate] = useState(validation)

  const verifyToken = useSelector<RootState, string>((state) => state.userReducer.verifyToken)
  const verifyFail = useSelector<RootState, boolean>((state) => state.userReducer.verifyErr)
  const verifyErrMsg = useSelector<RootState, string>((state) => state.userReducer.verifyMsg)
	const loginFail = useSelector<RootState, string>((state) => state.userReducer.error)
	const isLogged = useSelector<RootState, boolean>((state) => state.userReducer.isLogged)

  useEffect(() => {
    setStep1(true)
    setStep2(false)
  }, [])

	useEffect(() => {
    if (isLogged === false && loginFail !== "") {
      setLoginError(true)
    } else {
      setLoginError(false)
    }
    if(verifyToken !== '') {
      setStep2(true)
      setStep1(false)
    }
    if( verifyFail === true || verifyErrMsg !== '') {
      setVerifyError(true)
    } else {
      setVerifyError(false)
    }
	}, [loginError, loginFail, verifyToken, verifyFail, verifyErrMsg])

  const isValidForm = () => {
    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regEmail.test(email) === false){
      validation.email = true
    }

    if(password === '') {
      validation.password = true
    }

    const isValid = Object.values(validation).every(item => item === false)
    if(isValid === false) {
      setValidate(validation)
      return false
    }
    return true
  }

  const handleLogin = () => {
    validation = {
      email: false,
      password: false,
      verify: false
    }
    setValidate(validation)
    setLoginError(false)
    if( isValidForm() === false ) {
      return false;
    }
    dispatch(user.loginRequest(email, password))
  }

  const isVerifyForm = () => {
    if(verifyCode === '') {
      validate.verify = false
      setValidate(validate)
      return false
    }

    return true
  }

  const handleVerify = () => {
    validation.verify = false
    setValidate(validation)
    setVerifyError(false)

    if( isVerifyForm() === false ) {
      setVerifyError(true)
      return false;
    }

    dispatch(user.loginVerifyRequest(email, verifyCode))
  }

  return (
    <div className="login-to-account">
      <div>
        <h1>Welcome Back!</h1>
        <h4>Login to your account</h4>
        {loginError && 
          (<h4 style={{color: "darkred"}}>Sorry, unable to log you in. Please try again.</h4>)
        }

        {verifyError && 
          (<h4 style={{color: "darkred"}}>{`${verifyErrMsg !== '' ? verifyErrMsg : 'Sorry, unable to verify you. Please try again.'}`}</h4>)
        }

        {step1 && 
        <div className="login-form">
          <div className="row mb-2">
            <div className="col-sm-12">
              <input
                type="email"
                name="email_address"
                placeholder="Email..."
                onChange={e => setEmail(e.target.value)}
              />
              <span className={`noError ${validate.email ? "hasError" : ""}`}>*This field is required</span>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-12">
              <input
                type="password"
                name="password"
                placeholder="Password..."
                onChange={e => setPassword(e.target.value)}
              />
              <span className={`noError ${validate.password ? "hasError" : ""}`}>*This field is required</span>
            </div>
          </div>
          <div className="row pt-2 mb-2">
            <div className="col-sm-6">
              <a href="/login/forgotpassword" className="forgot-field">
                <small>Forgot Password</small>?
              </a>
            </div>
            <div className="col-sm-6">
              <div className="checkbox-field remember-box">
                <input type="checkbox" name="rememberme" value="1" />
                &nbsp;
                <small>Remember me</small>
              </div>
            </div>
          </div>
          <p className="submit-wrap">
            <button
              className="big button mid dark"
              type="submit"
              name="btnLogin"
              onClick={handleLogin}
            >Login
            </button>
          </p>
        </div>
        }

        {step2 && 
        <div className="verify-form">
          <div className="row mb-2">
            <div className="col-sm-12">
              <input
                type="text"
                name="verify-code"
                placeholder="Code (sent via E-Mail)"
                onChange={e => setVerifyCode(e.target.value)}
              />
              <span className={`noError ${validate.verify ? "hasError" : ""}`}>*This field is required</span>
            </div>
          </div>
          <p className="submit-wrap">
            <button
              className="big button mid dark"
              type="submit"
              name="btnLogin"
              onClick={handleVerify}
            >Login
            </button>
          </p>
        </div>
        }
      </div>
    </div>
  );
};

export default Login;
