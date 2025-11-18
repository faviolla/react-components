import { useState } from "react";
import ListItemComponent from "./ListItemComponent";
import ButtonComponent from "./ButtonComponent";

const ListComponent = () => {
  const initialValues = [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
  ];
  const [input, setInput] = useState("");
  const [items, setItem] = useState(initialValues);

  const onClickHandler = (input) => {
    const updatedElement = [...items, { id: 5, name: input }];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key == "Enter") {
      const updatedElement = [...items, { id: items.length + 1, name: input }];
      setItem(updatedElement);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItem(filteredItems);
    console.log("delete");
  };

  return (
    <>
      <h1>TODO List</h1>
      <input onKeyDown={onEnterHandler} onChange={onChangeHandler} value={input} placeholder="new task" />
      <p>{items.length}</p>
      <ul>
        {items.map((element) => (
          <>
            <ListItemComponent key={element.id} id={element.id} name={element.name}>
              {<ButtonComponent text={"delete"} onClick={() => handleDelete(element.id)} type={"button"} />}
            </ListItemComponent>
          </>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add TODO element</button>
    </>
  );
};

export default ListComponent;
