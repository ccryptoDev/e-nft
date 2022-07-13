import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../../actions/user';
import './subscribe.scss';

const Subscribe = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isTerms, setIsTerms] = useState(false);
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [isMailing, setIsMailing] = useState(false);

  const isValidForm = () => {
    if(firstname === '') {
      alert('Please entry your firstname');
      return false;
    }

    if(lastname === '') {
      alert('please entry your lastname')
      return false;
    }

    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regEmail.test(email) === false){
      alert('Please entry the available email address!');
      return false;
    }

    const regPhone = /^[0-9\b]+$/;
    if (!phone || regPhone.test(phone) === false) {
      alert('Please allow only number');
      return false
    }
    
    if(displayname === '') {
      alert('Please entry the public display name')
      return false
    }

    if(password === '') {
      alert('You should entry your password')
      return false
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

  const handleSubscribe = () => {
    if( isValidForm() === false ) {
      return false;
    }
    dispatch(user.signupRequest(firstname, lastname, email, phone, displayname, password))
  }

  return (
    <div id="block-full">
      <div className="content-block">
        <h2>Start Purchasing NFTs</h2>
        <h1>Create Your Emmersive Wallet</h1>
        <h3 style={{display: 'none', color : "red"}}>We were unable to verify your request/submission, please try again.</h3>

          <div>
            <input type="text" id="first_name" name="first_name" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} /><br />
            <input type="text" id="last_name" name="last_name" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} /><br />
            <input type="email" name="email" placeholder="Email" autoComplete="chrome-off" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="tel" id="phone" name="phone" placeholder="Mobile Phone Number" onChange={(e) => setPhone(e.target.value)} /><br />
            <input type="text" id="display_name" name="display_name" placeholder="Public Display Name" onChange={(e) => setDisplayname(e.target.value)} /><br />
            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <div className="checkboxes">
                  
                  <div>
                    <input type="checkbox" name="terms_agree" id="terms_agree" checked={isTerms} onChange={(e) => setIsTerms(e.target.checked)} /> &nbsp; 
                    <Link to="/terms/" target="_blank"><small>I agree to the Terms of Service</small></Link>
                  </div>
                
                  <div >
                    <input type="checkbox" name="privacy_agree" id="privacy_agree" checked={isPrivacy} onChange={(e) => setIsPrivacy(e.target.checked)} /> &nbsp; 
                    <Link to="/privacy/" target="_blank"><small>I agree to the Privacy Policy</small></Link>
                  </div>
                

              <div>
                <input type="checkbox" name="marketing_agree" id="marketing_agree" value="1" checked={true} /> &nbsp; 
                <small>Add me to the marketing list</small>
              </div>
            </div>

            <p className="submit-wrap">
              <input type="hidden" name="grc" id="grc1" />
              <button type="submit" className="button mid dark" onClick={handleSubscribe}>Register</button>
            </p>

          </div>

      </div>
    </div>

  )
}

export default Subscribe;


