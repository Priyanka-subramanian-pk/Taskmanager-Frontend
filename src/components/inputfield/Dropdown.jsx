
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Dropdown = ({
  title,
  options,
  placeholder,
  value,
  onChange,
  name,
 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
     
      <div className="w-full flex cursor-pointer bg-custom-white justify-between items-center mt-2 p-3 border border-gray-300 rounded-lg " onClick={handleToggle}>
        <input
          type="text"
          placeholder={placeholder}
          value={value?.label || ""}
          readOnly // Make input read-only
          name={name}
          className="border-none outline-none cursor-pointer w-full  text-sm "
        />
        <div className="flex items-center " >
          {isOpen ? (
            <IoIosArrowUp className="mr-2" />
          ) : (
            <IoIosArrowDown className="mr-2" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full  w-full left-0 bg-white shadow-md border rounded-lg z-10 mt-1 text-sm">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Dropdown;
