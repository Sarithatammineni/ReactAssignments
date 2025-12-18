import { useEffect, useState } from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div className="p-3 mb-2 rounded-xl shadow">
      <p><strong>User:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Status:</strong> {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    // cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Todos List</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowTodos(false)}
        className="px-4 py-2 mb-4 rounded-xl shadow"
      >
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}
