
import { useState } from "react";
import ToDo from "./ToDo";

function App() {

  const [input, setInput] = useState("Your Todo");
  const [item, setItems] = useState([]);

  const inputEvent = (event) => {
      setInput(event.target.value);
  }
  const deleteItem = (id) => {
      setItems((oldItems) => {
        return oldItems.filter((arrEl, index) => { 
          return index !== id;
        })
      })
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input]
    })
    setInput("");
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add a item" value={input} onChange={inputEvent} />
          <button onClick={listOfItems} > + </button>
          <ul>
           {item.map((itemval, index) => {
              return <ToDo key={index} id = {index} text={itemval} onSelect={deleteItem} />
           })}
          </ul>
        </div>        
      </div>
    </>
  );
}

export default App;
