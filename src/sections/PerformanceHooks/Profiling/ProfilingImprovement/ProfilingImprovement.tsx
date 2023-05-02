import { memo, useState, Profiler } from 'react';

type Item = {
  id: number;
  title: string;
};

type TodosProps = {
  list: Item[];
};

const Todos = ({ list }: TodosProps) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

const MemoizedTodos = memo(Todos);

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: 'Read book' },
    { id: 2, title: 'Clean room' },
    { id: 3, title: 'Make coffee' },
  ]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    const id = Math.max(...todo.map((p) => p.id), 0) + 1;
    const newTodo = { id, title: todoText };
    setTodo([...todo, newTodo]);
  };

  const onRender = (
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  return (
    <div>
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>

      <Profiler id="Todos" onRender={onRender}>
        <Todos list={todo} />
      </Profiler>

      <Profiler id="MemoizedTodos" onRender={onRender}>
        <MemoizedTodos list={todo} />
      </Profiler>
    </div>
  );
};

const ProfilingImprovement = () => {
  return (
    <div className="Example">
      <h4>Profiling Improvement</h4>
      <App />
    </div>
  );
};

export { ProfilingImprovement };
