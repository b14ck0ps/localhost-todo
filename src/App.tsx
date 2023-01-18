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
        date: new Date().toLocaleDateString("fr-CA"),
        isDone: false,
      },
    ]);
  };
  const handleDone = (id: number) => {
    let updatedTodos = [...Todos];
    updatedTodos[id].isDone = !updatedTodos[id].isDone;
    setTodos(updatedTodos);
  };
  return (
    <div>
      <div className="flex justify-center mt-10">
        <InputField addTodo={handleAdd} />
      </div>
      <div className="flex flex-col gap-5 items-center mt-5">
        {Todos.map((todo, index) => (
          <div key={index}>
            <TodosCard
              id={index}
              desc={todo.desc}
              isDone={todo.isDone}
              date={todo.date}
              handleDone={handleDone}
            />
          </div>
        )).reverse()}
      </div>
    </div>
  );
}

export default App;
