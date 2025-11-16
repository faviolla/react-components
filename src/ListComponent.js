import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  const onClickHandler = (input) => {
    const updatedElement = [...items, input];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key == "Enter") {
      const updatedElement = [...items, input];
      setItem(updatedElement);
      setInput("");
    }
  };

  return (
    <>
      <h1>TODO List</h1>
      <input onKeyDown={onEnterHandler} onChange={onChangeHandler} value={input} placeholder="new task" />
      <p>{items.length}</p>
      <ul>
        {items.map((element, index) => (
          <>
            <ListItemComponent element={element} index={index} />
          </>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add TODO element</button>
    </>
  );
};

export default ListComponent;
