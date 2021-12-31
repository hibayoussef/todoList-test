import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";
import { Dispatch } from "redux";
import AuthService from "../../services/auth.service";

// we recieve email and name from component
export const LoginAction = (
  id: number,
  email: string,
  name: string,
  callback?: Function
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      // fetch data from backend
      await AuthService.login(id, email, name)
        .then((res) => {
          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res.data,
          });

          localStorage.setItem("userInfo", JSON.stringify(res.data));
          if (callback) callback();
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
};

export const SignupAction = (
  id: number,
  email: string,
  name: string,
  callback: Function
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
};
