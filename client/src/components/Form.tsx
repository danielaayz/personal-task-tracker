import React, { useEffect } from "react";

interface Todo {
   id: number;
   title: string;
   completed: boolean;
}

interface FormProps {
   input: string;
   setInput: React.Dispatch<React.SetStateAction<string>>;
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
   editTodo: Todo | null;
   setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
   handleAddTask: () => void;
}

const Form: React.FC<FormProps> = ({
   input,
   setInput,
   todos,
   setTodos,
   editTodo,
   setEditTodo,
   handleAddTask,
}) => {
   // Update an existing todo's title
   const updateTodo = (title: string, id: number, completed: boolean) => {
      const updatedTodos = todos.map((todo) =>
         todo.id === id ? { ...todo, title, completed } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
   };

   useEffect(() => {
      if (editTodo) {
         setInput(editTodo.title); // Set input to the title of the todo being edited
      } else {
         setInput(""); // Clear input if not editing
      }
   }, [setInput, editTodo]);

   const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (editTodo) {
         // Update existing task
         updateTodo(input, editTodo.id, editTodo.completed);
      } else {
         // Add new task
         const newTask: Todo = {
            id: todos.length
               ? Math.max(...todos.map((todo) => todo.id)) + 1
               : 1, // Generate new ID
            title: input,
            completed: false,
         };
         setTodos([...todos, newTask]);
      }

      setInput(""); // Clear input
      handleAddTask(); // Clear handler to add task
   };

   return (
      <form onSubmit={onFormSubmit}>
         <div className="flex items-center pt-[80px] mb-[24px]">
            <input
               className="rounded-lg p-2 bg-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-[#3E4651]"
               type="text"
               placeholder="Add a new task..."
               value={input}
               required
               onChange={onInputChange}
            />
            <button
               type="submit"
               className="flex justify-center items-center w-[70px] h-[40px] p-2 rounded-lg border-0 bg-[#1D3B28] cursor-pointer ml-[8px]">
               {editTodo ? "OK" : ""}
               {!editTodo && (
                  <img
                     className="max-w-[13px]"
                     src="../public/img/plus.svg"
                     alt="icon image"
                  />
               )}
            </button>
         </div>
      </form>
   );
};

export default Form;
