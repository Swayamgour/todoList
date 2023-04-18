import React, { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import actions from './actions';

export default function App() {
  const [input, setInput] = useState('');
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
   console.log(todo , "j")

  return (
    <div>
      <h1 className="hading"> Add todo
        </h1>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <input className="p123"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: actions.ADD, payload: input });
          setInput('');
        }}
      >
        ADD
      </button>
      {todo.map((x) => (
        <div key={x.id}>
          <p className="p1">
            {x.isComplete && '✔️'}
            {x.task}
          </p>
          <span>
          <button className="p12"
            onClick={() => dispatch({ type: actions.DELETE, payload: x.id })}
          >
            Delete
          </button>
          <button className="p12"
            onClick={() => dispatch({ type: actions.COMPLETE, payload: x })}
          >
            Complete
          </button>
          </span>
        </div>
      ))}
    </div>
  );
}
