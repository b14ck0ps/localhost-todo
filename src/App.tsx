import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodosCard from "./components/TodosCard";
import { Todo } from "../Types";

function App() {
  const [Todos, setTodos] = useState<Array<Todo>>([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const handleAdd = (description: string) => {
    const newTodo: Todo = {
      desc: description,
      date: new Date().toLocaleDateString("fr-CA"),
      isDone: false,
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]); //TODO: fix this
    console.log(Todos); //! First [] array is empty for some reason.

    //localStorage.setItem("todos", JSON.stringify(Todos));
  };
  const handleDone = (id: number) => {
    let updatedTodos = [...Todos];
    updatedTodos[id].isDone = !updatedTodos[id].isDone;
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
