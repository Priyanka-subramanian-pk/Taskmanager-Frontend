import React from "react";
import CustomInputField from "../components/inputfield/CustomInputField";
import Button from "../components/button/Button";
import { useGlobalFormik } from "../utils/customHooks/formikValidation/useGlobalFormik";
import {
  registerInitialValues,
  registerSchema,
} from "../utils/validationSchema/authSchema/authSchema";
import { useNavigate } from "react-router-dom";
import { useGoogleSignup } from "../services/apiHooks/auth/useGoogleSignUp";
import { useRegister } from "../services/apiHooks/auth/useRegister";

const RegisterPage = () => {
  const navigate = useNavigate();
  //signup api hook
  const { handleGoogleSignup } = useGoogleSignup();
  const { handleRegister } = useRegister();

  //formik validation
  const formik = useGlobalFormik(
    registerInitialValues,
    registerSchema,
    (values) => {
      console.log("Register Form submitted", values);
      handleRegister(values);
    }
  );

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bold-Inter ">
        <div className=" flex w-full lg:w-1/2">
          <div className="w-full m-10">
            <h5 className="text-2xl font-bold text-custom-blue mb-5 ">
              Signup
            </h5>
            <div className="border-2 border-custom-blue w-full  p-8 rounded-md">
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <CustomInputField
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                  />
                  <CustomInputField
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                  />
                  <CustomInputField
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
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
                  />
                  <CustomInputField
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.confirmPassword}
                    touched={formik.touched.confirmPassword}
                  />

                  <Button
                    buttonText="Signup"
                    type="submit"
                    className="w-full cursor-pointer hover:shadow-xl mt-4 bg-custom-blue text-white  "
                  />
                </form>
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <span
                    className="text-custom-blue cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
                <div className=" flex justify-center">
                  <Button
                    buttonText="Signup With Google"
                    type="submit"
                    onClick={handleGoogleSignup}
                    className="w-1/2 cursor-pointer hover:shadow-xl mt-4 rounded-md bg-custom-blue text-white "
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

export default RegisterPage;
