import React from "react";

const CustomInputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  className = "",
  onFocus,
  error,
  touched,
}) => {
  return (
    <div className="pt-3">
      <div
        className={`w-full flex items-center mt-2 p-3 border border-gray-300  focus-within:border-blue-500 bold-Inter bg-custom-white ${className}`}
      >
        <input
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          onFocus={onFocus}
          className="border-none outline-none w-full  text-sm "
        />
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs">{error}</div>
      )}
    </div>
  );
};

export default CustomInputField;
