import React from "react";

interface Todo {
   id: number;
   title: string;
   completed: boolean;
}

interface ToDoListProps {
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
   setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

const ToDoList: React.FC<ToDoListProps> = ({
   todos,
   setTodos,
   setEditTodo,
}) => {
   // Toggle completion status of a todo
   const handleComplete = (todo: Todo) => {
      setTodos(
         todos.map((item) =>
            item.id === todo.id ? { ...item, completed: !item.completed } : item
         )
      );
   };

   // Set a todo for editing
   const handleEdit = (todo: Todo) => {
      setEditTodo(todo);
   };

   // Remove a todo from the list
   const handleDelete = (todo: Todo) => {
      setTodos(todos.filter((t) => t.id !== todo.id));
   };

   // Update a todo's title
   const handleInputChange = (id: number, newTitle: string) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo
         )
      );
   };
   return (
      <div>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id} className="mb-4 flex items-center">
                  <div className="relative w-full">
                     <input
                        className={`max-w-[288px] border border-[#3E4651] bg-[#B1BACB] rounded-lg pl-10 pr-28 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4651] list ${
                           todo.completed ? "line-through opacity-60" : ""
                        }`}
                        type="text"
                        value={todo.title}
                        onChange={(event) =>
                           handleInputChange(todo.id, event.target.value)
                        }
                     />
                     <div>
                        <button
                           onClick={() => handleComplete(todo)}
                           className="absolute right-20 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-900 text-lg mr-2">
                           <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                           onClick={() => handleEdit(todo)}
                           className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#FCEBD1] hover:text-yellow-400 text-lg mr-2">
                           <i className="fa fa-edit"></i>
                        </button>
                        <button
                           onClick={() => handleDelete(todo)}
                           className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-grey-900 text-lg">
                           <i className="fa fa-trash"></i>
                        </button>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ToDoList;
