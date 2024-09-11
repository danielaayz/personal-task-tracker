import React, { useState, useEffect } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

type Todo = {
   id: number;
   title: string;
   completed: boolean;
};

interface TaskManagerProps {
   userName: string; // Get user's name from props
}

const TaskManager: React.FC<TaskManagerProps> = ({ userName }) => {
   // Initialize todos from localStorage or default to an empty array

   const [input, setInput] = useState<string>("");
   const [todos, setTodos] = useState<Todo[]>(() =>
      JSON.parse(localStorage.getItem("todos") || "[]")
   );
   const [editTodo, setEditTodo] = useState<Todo | null>(null);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   const handleAddTask = () => {
      if (input.trim() === "") {
         alert("Task description can't be empty");
         return;
      }
      setTodos([...todos, { id: Date.now(), title: input, completed: false }]);
      setInput("");
      //setNextId(nextId + 1);
   };

   return (
      <div className="flex flex-col items-center min-h-screen min-w-[320px]  bg-[#BA9F38]">
         <div className="flex items-center w-full pt-[16px] pb-[20px] pl-[16px] bg-[#FCEBD1]">
            <img
               className="max-w-[30px] mr-[8px]"
               src="../public/img/userimg.svg"
               alt="icon image"
            />{" "}
            {userName}
         </div>
         <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            handleAddTask={handleAddTask}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
         />
         <ToDoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
         />
      </div>
   );
};

export default TaskManager;
