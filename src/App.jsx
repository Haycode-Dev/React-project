import { useState } from 'react';

// Import custom hooks
import useLocalStorage from './hooks/useLocalStorage';

// Import custom components
import CustomForm from './components/CustomForm';
import EditForm from './components/EditForm';
import TaskList from './components/TaskList';

function App() {
  // Initialize state variables
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Define function to add task to the list
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  };

  // Define function to delete task from the list
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  };

  // Define function to toggle task between completed and incomplete
  const toggleTask = (id) => {};

  // Define function to update a task in the list
  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )));
    closeEditMode();
  };

  // Define function to close the edit mode for a task
  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  // Define function to enter edit mode for a task
  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    // Render the main container element
    <div className="container">
      {/* Render the EditForm component if isEditing is true */}
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}

      {/* Render the CustomForm component */}
      <CustomForm addTask={addTask}/>

      {/* Render the TaskList component if there are any tasks */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
