import { useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = async () => {
    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Show Todos</button>
      {todos.length > 0 && (
        <ul>
          {todos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AsyncEventHandler = () => {
  return (
    <div className="Example">
      <h4>Asynchronous event handler</h4>
      <Todos />
    </div>
  );
};

export { AsyncEventHandler };
