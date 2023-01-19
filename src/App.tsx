import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodosCard from "./components/TodosCard";
import { Todo } from "../Types";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ClearBtn from "./components/ClearBtn";

function App() {
  const localTodos = localStorage.getItem("todos");
  const [Todos, setTodos] = useState<Array<Todo>>([]);
  const [showClrBtn, setshowClrBtn] = useState(false);

  const isEmptyStrg = () => {
    if (typeof localTodos?.length !== "undefined" && localTodos?.length !== 2) {
      console.log(localTodos?.length);
      setshowClrBtn(true);
    }
  };

  //Render local data for the first time
  useEffect(() => {
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
    isEmptyStrg();
  }, []);

  //change local date when the state change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
    isEmptyStrg();
  }, [Todos, showClrBtn]);

  const handleAdd = (description: string) => {
    const newTodo: Todo = {
      desc: description,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      isDone: false,
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };
  const handleDone = (id: number) => {
    let updatedTodos = [...Todos];
    updatedTodos[id].isDone = !updatedTodos[id].isDone;
    setTodos(updatedTodos);
  };
  return (
    <div>
      <Header />

      {/* form components  */}
      <div className="relative">
        <div className="flex justify-center mt-10">
          <InputField addTodo={handleAdd} />
        </div>
        <div className="fixed sm:left-[10%] md:left-[20%] lg:left-[25%] xl:left-[30%] bottom-96">
          {showClrBtn && <ClearBtn />}
        </div>
      </div>

      {/* Renders TODOS */}
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

      <Footer />
    </div>
  );
}

export default App;
