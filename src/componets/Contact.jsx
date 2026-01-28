import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slice/counterSlice";

const Contact = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>contact</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
      <span>{count}</span>
    </div>
  );
};

export default Contact;
