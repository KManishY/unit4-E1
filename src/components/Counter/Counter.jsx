import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count }) => {
      // sample value to be replaced
      //let count = 0;
      const [count1, setCount] = React.useState(count);
      // NOTE: do not delete `data-cy` key value pair
      return (
            <div className={styles.counter}>
                  <button
                        data-cy="task-counter-increment-button"
                        onClick={() => {
                              if (count1 > 0) {
                                    setCount(count1 - 1);
                              }
                        }}
                  >
                        -
                  </button>
                  <span data-cy="task-counter-value">{count1}</span>
                  <button
                        data-cy="task-counter-decrement-button"
                        onClick={() => setCount(count1 + 1)}
                  >
                        +
                  </button>
            </div>
      );
};

export default Counter;
