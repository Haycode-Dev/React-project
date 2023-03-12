import { useState } from 'react';

// import styles
import styles from './TaskItem.module.css';

// import library icons
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  // state for checkbox
  const [isChecked, setIsChecked ] = useState(task.checked);


  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        {/* task label */}
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
        </label>
      </div>
      <div className={styles["task-group"]}>
        {/* edit button */}
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        {/* delete button */}
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}

export default TaskItem;
