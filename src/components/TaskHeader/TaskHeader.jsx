import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ data }) => {
      // sample values to be replaced
      console.log("in header", data);
      let totalTask = data.length;
      let pTask = 0;
      for (let i = 0; i < data.length; i++) {
            if (data[i].done === false) {
                  pTask++;
            }
      }

      let unCompletedTask = pTask;

      // NOTE: do not delete `data-cy` key value pair
      return (
            <div data-cy="task-header" className={styles.taskHeader}>
                  <h1>Todo App</h1>
                  <span>You have</span>
                  <b data-cy="header-remaining-task">
                        {" " + unCompletedTask + " "}
                  </b>
                  <span>of</span>
                  <b data-cy="header-total-task">{" " + totalTask + " "}</b>
                  <span>tasks are remaining</span>
            </div>
      );
};

export default TaskHeader;
