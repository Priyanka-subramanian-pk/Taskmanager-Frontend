
import React from "react";

const Button = ({ buttonText, className,  onClick, type = "button" }) => {
  return (
    <button
      type={type} 
      className={` flex items-center justify-center   ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2 p-3 bold-Inter"> 
        <span>{buttonText}</span>
       
      </span>
    </button>
  );
};

export default Button;