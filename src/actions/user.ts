import { createAction } from '../utils';
import { USER, UserData } from './types';

export const user = {
  loginRequest: (email: string, password: string) => createAction(USER.LOGIN_REQUEST, {email, password}),
  forgotPassword: (email: string) => createAction(USER.FORGOT_PASSWORD_REQUEST, {email}),
  loginSuccess: (data: UserData) => createAction(USER.LOGIN_SUCCESS, { ...data }),
  logOut: () => createAction(USER.LOG_OUT),
  loginFailure: (error: Object) => createAction(USER.LOGIN_FAILURE, {...error}),
  loginVerifyRequest: (email: string, verifyCode: string) => createAction(USER.LOGIN_VERIFY_REQUEST, {email, verifyCode}),
  loginVerifySuccess: (data: UserData) => createAction(USER.LOGIN_VERIFY_SUCCESS, {...data}),
  loginVerifyFailure: (error: Object) => createAction(USER.LOGIN_VERIFY_FAILURE, {...error}),
  signupRequest: (firstName: string, lastName: string, email: string, phoneNumber: string, publicName: string, password: string) => createAction(USER.SIGNUP_REQUEST, {firstName, lastName, email, phoneNumber, publicName, password}),
  signupSuccess: (data: string[]) => createAction(USER.SIGNUP_SUCCESS, data),
  signupFailure: (error: Object) => createAction(USER.SIGNUP_FAILURE, error),
  updateprofRequest: (firstName: string, lastName: string, phoneNumber: string, publicName: string) => createAction(USER.UPDATEPROF_REQUEST, {firstName, lastName, phoneNumber, publicName}),
  updateprofSuccess: (data: string[]) => createAction(USER.UPDATEPROF_SUCCESS, data),
  updateprofFailure: (error: Object) => createAction(USER.UPDATEPROF_FAILURE, error),
}