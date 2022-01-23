import Check from './Check';
import {FaTrash} from 'react-icons/fa';

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
    >
      <button
        className="flex items-center"
        onClick={() => changeTodo(todo._id)}
      >
        <Check isCompleted={todo.isCompleted}/>
        <span className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <FaTrash className="text-gray-600 hover:text-red-500 transition-colors ease-in-out duration-300" size={22}/>
      </button>
    </div>
  );
}

export default TodoItem;