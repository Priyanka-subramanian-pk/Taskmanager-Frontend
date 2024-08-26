import React from "react";
import Button from "../button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="grid grid-cols-2 bg-custom-blue">
        <div>
          <p>yy</p>
        </div>
        <div className="grid grid-cols-2 flex justify-between">
          <div></div>
          <div className="flex justify-evenly">
            <Button
              buttonText="Login"
              type="submit"
              onClick={() => handleButtonClick("/login")}
              className={`cursor-pointer hover:shadow-xl my-3 rounded-md ${
                location.pathname === "/login"
                  ? "bg-custom-white text-custom-blue"
                  : "bg-custom-blue text-white"
              }`}
            />
            <Button
              buttonText="Signup"
              type="submit"
              onClick={() => handleButtonClick("/register")}
              className={`cursor-pointer hover:shadow-xl my-3 rounded-md ${
                location.pathname === "/register"
                  ? "bg-white text-custom-blue"
                  : "bg-custom-blue text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
