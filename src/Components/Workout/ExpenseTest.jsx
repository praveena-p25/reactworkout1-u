import { useState } from "react";
import ConditionalContent from "./ConditionalContent";

const ExpenseTest = () => {
  const [title, setTitle] = useState("");
  const clickHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const getdata = {
      title: title,
    };
    console.log(getdata);
    setTitle("");
  };
  const [test, settest] = useState(false);
  const testHandler = () => {
    settest(true);
  };

  const [number, setNumber] = useState(0);
  const [increment, setincrement] = useState(0);

  const incrementHandler = () => {
    setNumber((prev) => prev + 1);
  };

  const dummy_data = [
    { label: title, value: "food" },
    { label: title, value: "shelter" },
    { label: title, value: "car" },
    { label: title, value: "fuel" },
  ];

  return (
    <form onSubmit={submitHandler}>
      <div>
        {/* <input type="number" value={increment} /> */}
        <p>{number}</p>
        <button onClick={incrementHandler}>increment</button>

        <ConditionalContent dummy_data={dummy_data} />

        {!test && <button onClick={testHandler}>TestContent</button>}
        <label>TestTitle</label>
        {test && <input type="text" value={title} onChange={clickHandler} />}

        <button>submit</button>
      </div>
    </form>
  );
};
export default ExpenseTest;
