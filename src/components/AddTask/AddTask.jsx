import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({ todos, setTodos }) => {
      // NOTE: do not delete `data-cy` key value pair
      const [text, setText] = React.useState("");

      return (
            <div className={styles.todoForm}>
                  <input
                        data-cy="add-task-input"
                        type="text"
                        value={text}
                        onChange={(e) => {
                              setText(e.target.value);
                        }}
                        required
                  />
                  <button
                        data-cy="add-task-button"
                        onClick={() => {
                              let enteredText = text;
                              let check;
                              for (let i = 0; i < todos.length; i++) {
                                    if (enteredText === todos[i].text) {
                                          check = false;
                                          break;
                                    }
                              }
                              if (check === false) {
                                    alert("task is already in the list ");
                              } else if (enteredText === "") {
                                    alert("add task");
                              } else {
                                    setTodos([
                                          ...todos,
                                          {
                                                id: todos.length + 1,
                                                text: text,
                                                done: false,
                                                count: 1,
                                          },
                                    ]);
                              }
                              setText("");
                        }}
                  >
                        +
                  </button>
            </div>
      );
};

export default AddTask;
