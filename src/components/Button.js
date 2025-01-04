import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "default",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  to, // New prop for navigation
  ...props
}) => {
  const navigate = useNavigate();

  // Define base classes based on variant
  const baseClass =
    variant === "outline" ? "zuzzuu-button-outline" : "zuzzuu-button";

  // Define size classes based on size
  const sizeClass =
    size === "sm"
      ? "zuzzuu-button-sm"
      : size === "lg"
      ? "zuzzuu-button-lg"
      : "";

  // Handle button click
  const handleClick = (e) => {
    if (to) {
      navigate(to); // Navigate to the specified route
    }
    if (onClick) {
      onClick(e); // Call the onClick handler if provided
    }
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${sizeClass} ${className}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
