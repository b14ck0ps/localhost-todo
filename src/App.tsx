import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodosCard from "./components/TodosCard";
import { Todo } from "../Types";
import todosData from "../data/todosData.json";
function App() {
  const [Todos, setTodos] = useState<Array<Todo>>(todosData);

  const handleAdd = (description: string) => {
    setTodos([
      ...Todos,
      {
        desc: description,
        date: new Date().toLocaleDateString("en-us"),
        isDone: false,
      },
    ]);
  };
  return (
    <div>
      <div className="flex justify-center mt-52">
        <InputField addTodo={handleAdd} />
      </div>
      <div className="flex flex-col gap-5 items-center mt-5">
        {Todos.map((todo, index) => (
          <div key={index}>
            <TodosCard desc={todo.desc} isDone={todo.isDone} date={todo.date} />
          </div>
        )).reverse()}
      </div>
    </div>
  );
}

export default App;
