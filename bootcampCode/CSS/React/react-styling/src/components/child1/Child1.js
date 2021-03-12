import "./child1.css";

const divStyle = {
  border: "solid blue 5px",
};

const pStyle = {
  color: "blue",
};

const Child1 = () => (
  <div style={divStyle}>
    <p style={pStyle}>I am Child1 component</p>
  </div>
);

export default Child1;
