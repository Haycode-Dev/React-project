import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
        {/* Search Bar Wrapper */}
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Item"
        />
        {/* whats written on search bar */}
        <label
          htmlFor="task"
          className="label"
        >Enter Item</label>
      </div>
      {/* Button */}
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm