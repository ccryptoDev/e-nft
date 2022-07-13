import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { user } from '../../actions/user'
import { RootState } from '../../actions/types'
import './auth.scss'

let validation = {
  firstName: false,
  lastName: false,
  email: false,
  displayName: false,
  password: false,
  phone: false
}

const Register = () => {
  const dispatch = useDispatch();
  const [firstname, setFristname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isTerms, setIsTerms] = useState(false);
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [isMailing, setIsMailing] = useState(true)
  const [validate, setValidate] = useState(validation)

  const [signupSuccess, setSignupSuccess] = useState(false)
  const isSignedUp = useSelector<RootState, boolean>((state) => state.userReducer.isSignedUp)
  const errorMsg = useSelector<RootState, string>((state) => state.userReducer.error)

  useEffect(() => {
    if(isSignedUp === true) {
      setSignupSuccess(true)
    } else {
      setSignupSuccess(false)
    }
  }, [signupSuccess, isSignedUp])

  const isValidForm = () => {
    if(firstname === '') {
      validation.firstName = true;
    }

    if(lastname === '') {
      validation.lastName = true;
    }

    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regEmail.test(email) === false){
      validation.email = true;
    }

    const regPhone = /^[0-9\b]+$/;
    if (!phone || regPhone.test(phone) === false) {
      validation.phone = true;
    }
    
    if(displayname === '') {
      validation.displayName = true;
    }

    if(password === '') {
      validation.password = true;
    }

    let isValid = Object.values(validation).every(item => item === false)
    if(isValid === false) {
      setValidate(validation)
      return false;
    }

    if(isTerms === false) {
      alert('please confirm terms')
      return false
    }

    if(isPrivacy === false) {
      alert('please confirm privacy')
      return false
    }

    return true
  }
  const handleRegister = () => {
    validation = {
      firstName: false,
      lastName: false,
      email: false,
      displayName: false,
      password: false,
      phone: false
    }
    setValidate(validation)
    setSignupSuccess(false)
    if( isValidForm() === false ) {
      return false;
    }
    dispatch(user.signupRequest(firstname, lastname, email, phone, displayname, password))
  }
  return (
    <div className="create-account">
      <div>
        <h1>Register</h1>
        <h4>Create your Emmersive<br/> account &amp; wallet</h4>
        {signupSuccess && 
          (<h4 style={{color: "#0d6efd"}}>Registered your account successfully. Please login.</h4>)
        }
        {signupSuccess === false && errorMsg !== "" &&
          (<h4 style={{color: "darkred"}}>{errorMsg}</h4>)
        }
        <div>
          <p>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              onChange={(e) => setFristname(e.target.value)}
            />
            <span className={`noError ${validate.firstName ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <p>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
            <span className={`noError ${validate.lastName ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <p>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={e => setEmail(e.target.value)} 
            />
            <span className={`noError ${validate.email ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <p>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile Phone Number"
              onChange={e => setPhone(e.target.value)}
            />
            <span className={`noError ${validate.phone ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <p>
            <input
              type="text"
              name="display_name"
              placeholder="Public Display Name" 
              onChange={e => setDisplayname(e.target.value)}
            />
            <span className={`noError ${validate.displayName ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={`noError ${validate.password ? "hasError" : ""}`}>*This field is required</span>
          </p>
          <div className="checkboxes">
            <div className="checkbox-field">
              <input
                type="checkbox"
                name="terms_agree"
                checked={isTerms}
                onChange={(e) => setIsTerms(e.target.checked)}
              />{" "}
              &nbsp;
              <a href="/terms/" target="_blank">
                <small>I agree to the Terms of Service</small>
              </a>
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                name="privacy_agree"
                checked={isPrivacy}
                onChange={(e) => setIsPrivacy(e.target.checked)}
              />{" "}
              &nbsp;
              <a href="/privacy/" target="_blank">
                <small>I agree to the Privacy Policy</small>
              </a>
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                name="marketing_agree" 
                checked={isMailing} 
                onChange={e => setIsMailing(e.target.checked)}
              />{" "}
              &nbsp;
              <small>Add me to the marketing list</small>
            </div>
          </div>
          <p className="submit-wrap">
            <input type="hidden" name="grc" id="grc1" />
            <button className="big button mid dark" onClick={handleRegister}>Register</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register;