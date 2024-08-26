import React from "react";
import CustomInputField from "../components/inputfield/CustomInputField";
import Button from "../components/button/Button";
import { useGlobalFormik } from "../utils/customHooks/formikValidation/useGlobalFormik";
import {
  loginInitialValues,
  loginSchema,
} from "../utils/validationSchema/authSchema/authSchema";
import { useNavigate } from "react-router-dom";
import { useGoogleSignin } from "../services/apiHooks/auth/useGoogleSignIn";
import { useLogin } from "../services/apiHooks/auth/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  //login function custom hooks
  const { handleGoogleSignin } = useGoogleSignin();
  const { handleLogin } = useLogin();

  //formik validation with login function
  const formik = useGlobalFormik(loginInitialValues, loginSchema, (values) => {
    console.log("Login Form submitted", values);
    handleLogin(values);
  });

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bold-Inter ">
        <div className=" flex w-full lg:w-1/2">
          <div className="w-full m-10">
            <h5 className="text-2xl font-bold text-custom-blue mb-5 ">Login</h5>
            <div className="border-2 border-custom-blue w-full  p-8 rounded-md">
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <CustomInputField
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                    showForgotPassword={true}
                  />
                  <CustomInputField
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    showForgotPassword={true}
                  />
                  <Button
                    buttonText="Login"
                    type="submit"
                    className="w-full cursor-pointer hover:shadow-xl mt-4 text-white bg-custom-blue  "
                  />
                </form>
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <span
                    className="text-custom-blue cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    Signup
                  </span>
                </p>
                <div className=" flex justify-center">
                  <Button
                    buttonText="Login With Google"
                    type="submit"
                    onClick={handleGoogleSignin}
                    className="w-1/2 cursor-pointer hover:shadow-xl mt-4 rounded-md text-white  bg-custom-blue "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
