import { ThunkDispatch } from "redux-thunk";

export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  emailNotification: boolean;
  profile_image: string;
  blocked: boolean;
  title: "Mrs." | "Mr." | "Mx.";
  totalSpending: number;
  totalBooking: number;
  bookings: string[];
  createdAt: Date;
  notification: boolean;
}
export interface IUser {
  user: User;
  access_token: string;
  message: string;
}
export interface IChangeNotification {
  user: User;
}
export interface SignUp {
  title: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  cookiePolicy: boolean;
  email: string;
}
export interface IProfileUpdate {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
export interface IResetPassword {
  password: string;
  correctPassword: string;
}
export interface IForm {
  email: string;
  password: string;
}
export interface UserState {
  User: User;
  loading: boolean;
  success: string;
  error: string;
  status: number | null;
}

export interface IPassword {
  newPassword: string;
  confirmPassword: string;
}
interface LOGIN_START {
  type: "LOGIN_START";
}

interface LOGIN_ERROR {
  type: "LOGIN_ERROR";
  payload: string;
  status: number;
}
interface LOGIN_LIMIT {
  type: "LOGIN_LIMIT";
  payload: string;
  status: number;
}

interface SIGN_UP_START {
  type: "SIGN_UP_START";
}

interface SIGN_UP_ERROR {
  type: "SIGN_UP_ERROR";
  payload: string;
  status: number;
}

interface IS_LOGGED_IN_START {
  type: "IS_LOGGED_IN_START";
}
interface IS_LOGGED_IN_SUCCESS {
  type: "IS_LOGGED_IN_SUCCESS";
  payload: User;
  status: number;
}
interface IS_LOGGED_IN_ERROR {
  type: "IS_LOGGED_IN_ERROR";
  payload: string;
  status: number;
}

interface LOGOUT_START {
  type: "LOGOUT_START";
}

interface LOGOUT_ERROR {
  type: "LOGOUT_ERROR";
  payload: string;
  status: number;
}

interface CHANGE_PASSWORD_START {
  type: "CHANGE_PASSWORD_START";
}

interface CHANGE_PASSWORD_SUCCESS {
  type: "CHANGE_PASSWORD_SUCCESS";
  payload: string;
  status: number;
}
export interface IChangePassword {}
interface CHANGE_PASSWORD_ERROR {
  type: "CHANGE_PASSWORD_ERROR";
  payload: string;
  status: number;
}

interface CHANGE_NOTIFICATION_START {
  type: "CHANGE_NOTIFICATION_START";
}
interface CHANGE_NOTIFICATION_SUCCESS {
  type: "CHANGE_NOTIFICATION_SUCCESS";
  payload: User;
  status: number;
}
interface CHANGE_NOTIFICATION_ERROR {
  type: "CHANGE_NOTIFICATION_ERROR";
  payload: string;
  status: number;
}

interface UPDATE_PROFILE_START {
  type: "UPDATE_PROFILE_START";
}

interface UPDATE_PROFILE_START_SUCCESS {
  type: "UPDATE_PROFILE_START_SUCCESS";
  payload: User;
  status: number;
  success: string;
}
interface UPDATE_PROFILE_START_ERROR {
  type: "UPDATE_PROFILE_START_ERROR";
  payload: string;
  status: number;
}

interface RESET_PASSWORD_START {
  type: "RESET_PASSWORD_START";
}
interface RESET_PASSWORD_SUCCESS {
  type: "RESET_PASSWORD_SUCCESS";
  payload: string;
  status: number;
}
interface RESET_PASSWORD_ERROR {
  type: "RESET_PASSWORD_ERROR";
  payload: string;
  status: number;
}

interface RESET_PASSWORD_TOKEN_CHECK_START {
  type: "RESET_PASSWORD_TOKEN_CHECK_START";
}
interface RESET_PASSWORD_TOKEN_CHECK_SUCCESS {
  type: "RESET_PASSWORD_TOKEN_CHECK_SUCCESS";
  status: number;
}
interface RESET_PASSWORD_TOKEN_CHECK_ERROR {
  type: "RESET_PASSWORD_TOKEN_CHECK_ERROR";
  payload: string;
  status: number;
}

interface FORGOT_PASSWORD_START {
  type: "FORGOT_PASSWORD_START";
}
interface FORGOT_PASSWORD_SUCCESS {
  type: "FORGOT_PASSWORD_SUCCESS";
  payload: string;
  status: number;
}
interface FORGOT_PASSWORD_ERROR {
  type: "FORGOT_PASSWORD_ERROR";
  payload: string;
  status: number;
}
interface USER_RESET {
  type: "USER_RESET";
}
interface FORGOT_PASSWORD_LIMIT {
  type: "FORGOT_PASSWORD_LIMIT";
  payload: string;
  status: number;
}

export type UserAction =
  | LOGIN_START
  | LOGIN_ERROR
  | LOGIN_LIMIT
  | SIGN_UP_START
  | SIGN_UP_ERROR
  | IS_LOGGED_IN_START
  | IS_LOGGED_IN_SUCCESS
  | IS_LOGGED_IN_ERROR
  | LOGOUT_START
  | LOGOUT_ERROR
  | CHANGE_PASSWORD_START
  | CHANGE_PASSWORD_SUCCESS
  | CHANGE_PASSWORD_ERROR
  | CHANGE_NOTIFICATION_START
  | CHANGE_NOTIFICATION_SUCCESS
  | CHANGE_NOTIFICATION_ERROR
  | UPDATE_PROFILE_START
  | UPDATE_PROFILE_START_SUCCESS
  | UPDATE_PROFILE_START_ERROR
  | RESET_PASSWORD_START
  | RESET_PASSWORD_SUCCESS
  | RESET_PASSWORD_ERROR
  | FORGOT_PASSWORD_START
  | FORGOT_PASSWORD_SUCCESS
  | FORGOT_PASSWORD_ERROR
  | FORGOT_PASSWORD_LIMIT
  | RESET_PASSWORD_TOKEN_CHECK_START
  | RESET_PASSWORD_TOKEN_CHECK_SUCCESS
  | RESET_PASSWORD_TOKEN_CHECK_ERROR
  | USER_RESET;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
