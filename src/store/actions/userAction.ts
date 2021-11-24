import api from "@lib/api";
import {
  IChangeNotification,
  IForm,
  IPassword,
  IProfileUpdate,
  IResetPassword,
  IUser,
  SignUp,
  UserDispatch,
} from "types/user";
import Cookies from "js-cookie";
export const Login = (form: IForm) => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  await api()
    .post<IUser>("/Auth/Login", form)
    .then((data) => {
      Cookies.set("token", data.data.access_token, { expires: 365 });
      window.location.replace("/bookings/upcoming");
    })
    .catch((err) => {
      if (err?.response?.status === 429) {
        dispatch({
          type: "LOGIN_LIMIT",
          payload: err.response.data,
          status: err.response.status,
        });
        dispatch({
          type: "USER_RESET",
        });
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: err.response.data.message,
          status: err.response.status,
        });
        dispatch({
          type: "USER_RESET",
        });
      }
    });
};

export const signUp = (form: SignUp) => async (dispatch: UserDispatch) => {
  dispatch({ type: "SIGN_UP_START" });
  await api()
    .post<IUser>("/Auth/signUp", form)
    .then((data) => {
      Cookies.set("token", data.data.access_token, { expires: 365 });
      window.location.replace("/bookings/upcoming");
    })
    .catch((err) => {
      dispatch({
        type: "SIGN_UP_ERROR",
        payload: err.response.data.message,
        status: err.response.status,
      });
      dispatch({ type: "USER_RESET" });
    });
};
export const isLoggedIn = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "IS_LOGGED_IN_START" });
  await api()
    .get<IUser>("/Auth/isLoggedIn")
    .then((data) => {
      dispatch({
        type: "IS_LOGGED_IN_SUCCESS",
        payload: data.data.user,
        status: data.status,
      });
      dispatch({ type: "USER_RESET" });
    })
    .catch((err) => {
      dispatch({
        type: "IS_LOGGED_IN_ERROR",
        payload: err.response.data.message,
        status: err.response.status,
      });
      dispatch({ type: "USER_RESET" });
    });
};
export const Logout = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGOUT_START" });
  await api()
    .get("/Auth/Logout")
    .then(() => {
      Cookies.remove("token");
      window.location.replace("/");
    })
    .catch((err) => {
      dispatch({
        type: "LOGOUT_ERROR",
        payload: err?.response?.data?.message,
        status: err.response.status,
      });
      dispatch({ type: "USER_RESET" });
    });
};
export const changePassword =
  (form: IPassword) => async (dispatch: UserDispatch) => {
    dispatch({ type: "CHANGE_PASSWORD_START" });

    await api()
      .put<IUser>("/User/changePassword", form)
      .then((data) => {
        dispatch({
          type: "CHANGE_PASSWORD_SUCCESS",
          payload: data.data.message,
          status: data.status,
        });
        dispatch({ type: "USER_RESET" });
      })
      .catch((err) => {
        dispatch({
          type: "CHANGE_PASSWORD_ERROR",
          payload: err.response.data.message,
          status: err.response.status,
        });
        dispatch({ type: "USER_RESET" });
      });
  };

export const changeNotification = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "CHANGE_NOTIFICATION_START" });
  await api()
    .get<IChangeNotification>("/User/changeNotification")
    .then((data) => {
      dispatch({
        type: "CHANGE_NOTIFICATION_SUCCESS",
        payload: data.data.user,
        status: data.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: "CHANGE_NOTIFICATION_ERROR",
        payload: err.response.data.message,
        status: err.response.status,
      });
    });
};
export const profileUpdate =
  (form: IProfileUpdate) => async (dispatch: UserDispatch) => {
    dispatch({ type: "UPDATE_PROFILE_START" });
    await api()
      .put<IUser>("/User/updateProfile", form)
      .then((data) => {
        dispatch({
          type: "UPDATE_PROFILE_START_SUCCESS",
          payload: data.data.user,
          status: data.status,
          success: data.data.message,
        });
        dispatch({ type: "USER_RESET" });
      })
      .catch((err) => {
        dispatch({
          type: "UPDATE_PROFILE_START_ERROR",
          payload: err.response.data.message,
          status: err.response.status,
        });
        dispatch({ type: "USER_RESET" });
      });
  };
export const forgotPassword =
  (email: string) => async (dispatch: UserDispatch) => {
    dispatch({ type: "FORGOT_PASSWORD_START" });
    await api()
      .post<IUser>("/Auth/forgotPassword", email)
      .then((data) => {
        dispatch({
          type: "FORGOT_PASSWORD_SUCCESS",
          payload: data.data.message,
          status: data.status,
        });
        dispatch({ type: "USER_RESET" });
      })
      .catch((err) => {
        if (err?.response?.status === 429) {
          dispatch({
            type: "FORGOT_PASSWORD_LIMIT",
            payload: err.response.data,
            status: err.response.status,
          });
          dispatch({ type: "USER_RESET" });
        } else {
          dispatch({
            type: "FORGOT_PASSWORD_ERROR",
            payload: err.response.data.message,
            status: err.response.status,
          });
          dispatch({ type: "USER_RESET" });
        }
      });
  };

export const resetPassword =
  (resetPasswordToken: string, form: IResetPassword) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "RESET_PASSWORD_START" });
    await api()
      .put<IUser>(`/Auth/resetPassword/${resetPasswordToken}`, form)
      .then((data) => {
        setTimeout(() => {
          window.location.replace("/");
        }, 1500);
        dispatch({
          type: "RESET_PASSWORD_SUCCESS",
          payload: data.data.message,
          status: data.status,
        });
      })
      .catch((err) => {
        dispatch({
          type: "RESET_PASSWORD_ERROR",
          payload: err.response.data.message,
          status: err.response.status,
        });
        dispatch({ type: "USER_RESET" });
      });
  };
export const resetPasswordTokenCheck =
  (resetPasswordToken: string) => async (dispatch: UserDispatch) => {
    dispatch({ type: "RESET_PASSWORD_TOKEN_CHECK_START" });
    await api()
      .get<{ status: number }>(
        `/Auth/resetPasswordTokenCheck/${resetPasswordToken}`
      )
      .then((data) => {
        dispatch({
          type: "RESET_PASSWORD_TOKEN_CHECK_SUCCESS",
          status: data.status,
        });
      })
      .catch((err) => {
        dispatch({
          type: "RESET_PASSWORD_TOKEN_CHECK_ERROR",
          payload: err.response.data.message,
          status: err.response.status,
        });
        dispatch({ type: "USER_RESET" });
      });
  };
