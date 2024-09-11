import React from "react";

interface MenuProps {
   userName: string;
   onNewTaskClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ userName, onNewTaskClick }) => {
   return (
      <div className="flex flex-col items-center h-auto min-w-[320px]  bg-[#E1CC95]">
         <div className="min-w-[288px] h-[524px]  bg-[#FCEBD1] rounded-lg mt-[16px] mb-[16px]">
            <div className="flex items-center mt-[16px] mb-[20px] ml-[16px]">
               <img
                  className="max-w-[30px] mr-[8px]"
                  src="../public/img/userimg.svg"
                  alt="icon image"
               />{" "}
               {userName}
            </div>
            <div className="bg-[#BA9F38] pt-[80px]">
               <ul className="ml-[20px] pb-[100px]">
                  <li>
                     <button
                        className="flex items-center py-5"
                        onClick={onNewTaskClick}>
                        <img
                           className="max-w-[13px] mr-[8px]"
                           src="../public/img/plus.svg"
                           alt="icon image"
                        />
                        New Task
                     </button>
                  </li>
                  <li>
                     <button
                        className="flex items-center py-5"
                        onClick={() => alert("List All Tasks")}>
                        <img
                           className="max-w-[13px] mr-[8px]"
                           src="../public/img/listbullets.svg"
                           alt="icon image"
                        />
                        List All Tasks
                     </button>
                  </li>
                  <li>
                     <button
                        className="flex items-center py-5"
                        onClick={() => alert("List Completed Tasks")}>
                        <img
                           className="max-w-[13px] mr-[8px]"
                           src="../public/img/listchecks.svg"
                           alt="icon image"
                        />
                        List Completed Tasks
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Menu;
