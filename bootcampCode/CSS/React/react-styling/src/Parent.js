import React from "react";
import Child1 from "./components/child1/Child1";
import Child2 from "./components/child2/Child2";
import Child4 from "./components/child4/Child4";
import Child3 from "./components/child3/Child3";
import "./App.css";

const Parent = () => (
  <div>
    <div className="card card--purple">
      <p className="card__title card__title--sm">I am the parent component</p>
    </div>
    <Child1 />
    <Child2 />
    <Child3 />
    <Child4 />
  </div>
);

export default Parent;
