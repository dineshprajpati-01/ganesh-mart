import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../slice/counterSlice";

const About = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>about</h1>
      <span>{data.value}</span>
      <span>{data.title}</span>
      <button onClick={()=>{dispatch(changeName())}}>change title</button>
    </div>
  );
};

export default About;
