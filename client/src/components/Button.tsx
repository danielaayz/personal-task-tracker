import React from "react";

type ButtonProps = {
   onClick: () => void; // Function to be executed when the button is clicked
   children: React.ReactNode; // The content of the button, passed as a child element
   className?: string;
   disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
   onClick,
   children,
   className,
   disabled,
}) => {
   return (
      <button
         onClick={onClick}
         className={`w-[113px] h-[51px] bg-[#BA9F38] text-[#FFFFFF] font-bold tracking-widest rounded-lg ${className}`} // Combine all classes in one attribute
         disabled={disabled} // Only valid for button elements
      >
         {children}
      </button>
   );
};

export default Button;
