import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Main.Style.js";
import AddTodo from '../components/AddTodo';
import TodoItem from "../components/TodoItem";
import { addTask, completeTask, deleteTask } from "../redux/actions.js";
export class Main extends Component {
    render() {

        return (
            <div style={styles.appContainer}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Todo List</h1>
                    <div style={styles.inputWrapper}>
                        <AddTodo addTodo={(task) => this.props.addTodo(task)} />
                        <hr style={styles.separator} />
                    </div>
                    {this.props.taskItems.map((task) => {
                        return (
                            <TodoItem task={task} deleteTodo={(task) => this.props.deleteTodo(task)}
                                completeTodo={(task) => this.props.completeTodo(task)} />
                        )
                    })}
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (task) => dispatch(addTask(task)),
    deleteTodo: (task) => dispatch(deleteTask(task)),
    completeTodo: (task) => dispatch(completeTask(task))

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)