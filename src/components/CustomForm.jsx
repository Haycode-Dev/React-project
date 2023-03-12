import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

// function Custom Form that accepts "addTask" prop
const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  //defines function that will be called when the form is submitted (event)
  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevents default submission behavior 
    addTask({ //calls prop function and passes object name as current value of task and id as the current timestamp
      name: task,
      id: Date.now()
    })
    setTask("") //clears task state by calling setTask with an empty string
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
          onInput={(e) => setTask(e.target.value)} //updates task state as the user types with 'onInput' event handler
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