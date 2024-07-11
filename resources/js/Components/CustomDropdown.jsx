import React, {useState} from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const CustomDropdown = ({name, color = "dark", children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="relative inline-block text-left hover:text-primary"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <a
                    href="#"
                    className={color === "white" ? "inline-flex justify-content-between align-items-center fs-6 font-medium rounded-md text-white " : "inline-flex justify-content-between align-items-center fs-6 fw-medium rounded-md text-black"}
                    onClick={toggleDropdown}
                >
                    <span className={ color === "white" ? "text-white text-hover-primary" : ""}>{name}</span>
                    {isOpen ? (
                        <FaChevronUp className={ color === "white" ? "text-white w-3 h-3 ms-2" : "w-3 h-3 ms-2"}/>
                    ) : (
                        <FaChevronDown className={ color === "white" ? "text-white w-3 h-3 ms-2" : "w-3 h-3 ms-2"}/>
                    )}
                </a>
            </div>

            {isOpen && children.length > 0 && (
                <div
                    className={`dropdown-menu show position-absolute rounded-0 mt-2 w-auto shadow bg-white border transition-transform ${
                        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                    style={{
                        transformOrigin: 'top right',
                        transitionDuration: '75ms',
                        transitionTimingFunction: 'ease-in-out',
                    }}
                >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {
                            children.map(child => (
                                <a href={child.href} className="dropdown-item text-gray-700"
                                   role="menuitem">
                                    {child.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            )}

        </div>
    );
};

export default CustomDropdown;
