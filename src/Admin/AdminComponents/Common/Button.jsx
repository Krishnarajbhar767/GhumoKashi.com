import React from "react";

const Button = ({
    type = "text",
    children,
    icon: Icon,
    iconPosition = "left",
    variant = "primary",
    size = "md",
    fullWidth = false,
    onClick,
}) => {
    // Variants (Styles)
    const variants = {
        primary: "bg-red-500 text-white hover:bg-red-600",
        secondary: "bg-gray-700 text-white hover:bg-gray-800",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-200",
    };

    // Sizes (Padding & Text Size)
    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-7 py-3 text-lg",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${
                variants[variant]
            } ${sizes[size]} ${fullWidth ? "w-full" : ""}`}
        >
            {Icon && iconPosition === "left" && <Icon className="text-lg" />}{" "}
            {/* Left Icon */}
            {children}
            {Icon && iconPosition === "right" && (
                <Icon className="text-lg" />
            )}{" "}
            {/* Right Icon */}
        </button>
    );
};

export default Button;
