import React, { useState } from "react";
import StartPage from "./components/StartPage";
import TaskManager from "./components/TaskManager";
import "@fortawesome/fontawesome-free/css/all.min.css";

//import Menu from "./components/Menu";

const App: React.FC = () => {
   const [userName, setUserName] = useState<string | null>(null);
   //const [showTaskManager, setShowTaskManager] = useState<boolean>(false);

   const handleStart = (name: string) => {
      setUserName(name);
      //setShowTaskManager(false); // Ensure Menu is displayed after starting
   };

   // const handleNewTaskClick = () => {
   //    setShowTaskManager(true);
   // };

   return (
      <div>
         {userName ? (
            // Directly render TaskManager after entering username
            <TaskManager userName={userName} />
         ) : (
            // Show StartPage if no username is provided
            <StartPage onStart={handleStart} />
         )}
      </div>
   );
};

export default App;
