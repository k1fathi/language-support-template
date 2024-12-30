// src/components/Button.js
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
  const baseClass =
    variant === "outline" ? "zuzzuu-button-outline" : "zuzzuu-button";
  const sizeClass =
    size === "sm"
      ? "zuzzuu-button-sm"
      : size === "lg"
      ? "zuzzuu-button-lg"
      : "";

  const handleClick = (e) => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick(e);
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