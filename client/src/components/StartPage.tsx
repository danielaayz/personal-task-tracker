import React, { useState } from "react";
import Button from "./Button";

interface StartPageProps {
   onStart: (name: string) => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
   const [userName, setUserName] = useState<string>("");

   const handleSubmit = () => {
      if (userName.trim() !== "") {
         onStart(userName);
      } else {
         alert("Please enter a user name");
      }
   };

   return (
      <div className="flex flex-col items-center h-auto max-w-[320px]  bg-[#1D3B28]">
         <img
            className="max-w-[96px] mt-24"
            src="../public/img/CheckSquareOffset.svg"
            alt="icon"
         />
         <h1 className="mt-[37px] max-w-[180px] text-lg text-[#FCEBD1] text-center">
            Welcome to
            <br />
            Personal Task Tracker
         </h1>
         <div className="flex flex-col min-w-[264px] mt-[24px] items-center">
            <input
               type="text"
               value={userName}
               onChange={(e) => setUserName(e.target.value)} // Update state with the users input
               className="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#BA9F38] mb-[24px]"
               placeholder="Please enter your name..."
            />
            <Button onClick={handleSubmit} className="mb-[100px]">
               SUBMIT
            </Button>
         </div>
      </div>
   );
};

export default StartPage;
