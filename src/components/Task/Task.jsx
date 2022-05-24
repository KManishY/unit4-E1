import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({ el, onDelete }) => {
      // NOTE: do not delete `data-cy` key value pair
      const [task, setTask] = React.useState(el);
      const [isCompleated, setIsCompleated] = React.useState(el.done);
      return (
            <li data-cy="task" className={styles.task}>
                  <input className="styles.checkbox"
                        type="checkbox"
                        data-cy="task-checkbox"
                        checked={isCompleated}
                        onChange={(e) => {
                              setIsCompleated(e.target.checked);
                        }}
                  />
                  <div
                        data-cy="task-text"
                        className={isCompleated ? styles.stricked : null}
                  >
                        {el.text}
                  </div>
                  {/* Counter here */}
                  <Counter count={el.count} />
                  <button
                        data-cy="task-remove-button"
                        onClick={() => onDelete(el.id)}
                  >
                        X
                  </button>
            </li>
      );
};

export default Task;
