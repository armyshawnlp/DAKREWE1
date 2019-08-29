import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { addTodo } from "../actions";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./index.css";
import PropTypes from "prop-types";

const BlogForm = props => {
  const firestore = useFirestore();
  useFirestoreConnect("todos");

  const todos = useSelector(state => state.firestore.ordered.todos);

  const dispatch = useDispatch();
  const createTodo = useCallback(
    todo => dispatch(addTodo({ firestore }, todo)),
    [firestore]
  );

  const [todo, setTodo] = useState({ title: "", content: "" });

  const handleChange = e => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;
    createTodo(todo);
  };

  return (
    <Container>
      <Card>
       
          <form onSubmit={handleSubmit}>
            <label>Enter Title: </label>
            <input
              type="text"
              id="title"
              value={todo.title}
              onChange={handleChange}
            />
            <br />
            <label>Enter Content: </label>
            <input
              type="text"
              id="content"
              value={todo.content}
              onChange={handleChange}
            />
            <br />
            <input type="submit" />
          </form>
          {todos ? (
            todos.map((todo, i) => (
              <Card className="blogcard">
                <div key={i}>
                  <h2> {todo.title}</h2>
                  <p> {todo.content}</p>
                </div>
              </Card>
            ))
          ) : (
            <h2>Loading.... Please Wait</h2>
          )}
        
      </Card>
    </Container>
  );
};
const NavigationNonAuth = () => (
  <div>
    <h1>non</h1>
  </div>
);

export default BlogForm;
