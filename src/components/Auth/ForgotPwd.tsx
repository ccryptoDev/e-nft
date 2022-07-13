import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { user } from '../../actions/user'
import { RootState } from '../../actions/types';


const ForgotPwd = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('')

	const isValidForm = () => {
		const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email || regEmail.test(email) === false) {
			alert('Please enter available email address!');
			return false;
		}
	}

	const handleForgotPwd = () => {
		if (isValidForm() === false) {
			return false;
		}
		dispatch(user.forgotPassword(email))
	}

	return (
		<div className="login-to-account">
			<div>
				<h1>Welcome Back!</h1>
				<h4>Please enter your email</h4>
				<div>
					<input type="hidden" name="loginstep" value="step1" />
					<div className="row mb-2">
						<div className="col-sm-12">
							<input
								type="email"
								name="email_address"
								placeholder="E-mail"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<p className="submit-wrap">
						<button
							className="big button mid dark"
							type="submit"
							name="btnLogin"
							onClick={handleForgotPwd}
						>Submit
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ForgotPwd;
