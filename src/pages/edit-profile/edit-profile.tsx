import './edit-profile.scss';
import React, {useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { user } from '../../actions/user'

let validation = {
  firstName: false,
  lastName: false,
  displayName: false,
  phone: false
}

const EditProfile = () => {
  // const user = useSelector(state => state.user);
  // const userId = props.match.params.userId
  // const userVariable = {
  //   userId: userId
  // }
  
  const dispatch = useDispatch();
  const [firstname, setFristname] = useState('');
  const [lastname, setLastname] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState(validation)

  const isValidForm = () => {
  
    if(firstname === '') {
      validation.firstName = true;
    }

    if(lastname === '') {
      validation.lastName = true;
    }

    const regPhone = /^[0-9\b]+$/;
    if (!phone || regPhone.test(phone) === false) {
      validation.phone = true;
    }
    
    if(displayname === '') {
      validation.displayName = true;
    }

    let isValid = Object.values(validation).every(item => item === false)
    if(isValid === false) {
      setValidate(validation)
      return false;
    }

    return true
  }

  const handleUpdate = () => {
    validation = {
      firstName: false,
      lastName: false,
      displayName: false,
      phone: false
    }
    setValidate(validation)
    
    if( isValidForm() === false ) {
      return false;
    }
    dispatch(user.updateprofRequest(firstname, lastname, phone, displayname))
  }



  return (
    <div className="block-full block-full-login tory-wrap">
      <div className="block-login user-block center-content" >
        <div className="inner-message message-login updateProfile">
          <div id="block-full" className="update-profile">
            <div className="content-block">
              <h2 className="update-title">Update Your Profile</h2>
              <p>All fields are required to complete your profile for bidding.</p>

                <div className="update-profile-form">
                  <input type="text" id="first_name" name="first_name" placeholder="First Name..." onChange={(e) => setFristname(e.target.value)}/>
                  <span className={`noError ${validate.firstName ? "hasError" : ""}`}>*This field is required</span>
                  
                  <input type="text" id="last_name" name="last_name" placeholder="Last Name..." onChange={(e) => setLastname(e.target.value)}/>
                  <span className={`noError ${validate.lastName ? "hasError" : ""}`}>*This field is required</span>
                  
                  <input type="text" id="display_name" name="display_name" placeholder="Public Username / Display Name..." onChange={e => setDisplayname(e.target.value)}/>
                  <span className={`noError ${validate.displayName ? "hasError" : ""}`}>*This field is required</span>
                
                  <input type="tel" id="phone" name="phone" placeholder="Mobile Phone Number..." onChange={e => setPhone(e.target.value)}/>
                  <span className={`noError ${validate.phone ? "hasError" : ""}`}>*This field is required</span>
                
                  <input type="hidden" name="two_fa_type" id="two_fa_type" value="email" />
                  <button type="submit" name="btnCompleteProfile" className="button mid dark" onClick={handleUpdate}>Save Changes</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;