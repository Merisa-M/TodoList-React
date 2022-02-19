import React, { useState } from "react";
import styles from "./AddTodo.Style.js";
export default function AddTodo({ addTodo }) {
    let [todo, setTodo] = useState("");
    return (
        <div>
            <input style={styles.inputField} placeholder="uniste.."
                onChange={(event) => { setTodo(event.target.value) }}
                value={todo}
            ></input>
            <button style={styles.submitButton}
                onClick={() => {
                    addTodo(todo);
                    setTodo = ("");
                }}
            >Add</button>
        </div>
    );
}

