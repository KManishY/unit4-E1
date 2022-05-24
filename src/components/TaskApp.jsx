import React from "react";
import data from "../data/tasks.json";
import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";
import Header from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
const TaskApp = () => {
      // NOTE: do not delete `data-cy` key value pair
      const [todos, setTodos] = React.useState(data);

      let onDelete = (id) => {
            let newTodos = todos.filter((el) => el.id !== id);

            setTodos(newTodos);
      };
      return (
            <div data-cy="task-app" className={styles.taskApp}>
                  <Header data={todos} />

                  {/* Add Task */}
                  <AddTask todos={todos} setTodos={setTodos} />

                  <Tasks data={todos} onDelete={onDelete} />
            </div>
      );
};

export default TaskApp;


