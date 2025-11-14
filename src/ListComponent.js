import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(["First element"]);

  let count = 0;
  const onClickHandler = (input) => {
    const updatedElement = [...item, input];
    count++;

    setItem(updatedElement);
    setInput("");
  };

  
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <>
      <h1>TODO List</h1>
      <input onChange={onChangeHandler} value={input} />
      <p>{count}</p>
      <ul>
        {item.map((element, index) => (
          <ListItemComponent element={element} index={index} />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add TODO element</button>
    </>
  );
};

export default ListComponent;
