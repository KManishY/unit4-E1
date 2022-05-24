import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({ data, onDelete }) => {
      // NOTE: do not delete `data-cy` key value pair
      return (
            <>
                  <ul data-cy="tasks" className={styles.tasks}>
                        {/* Task List */}
                        {data.map((el) => (
                              <Task key={el.id} el={el} onDelete={onDelete} />
                        ))}
                  </ul>
                  <div data-cy="tasks-empty" className={styles.empty}>
                        {/* Show when No Tasks are present */}
                  </div>
            </>
      );
};

export default Tasks;
