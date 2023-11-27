// render list

import { useCallback, useState } from "react";

export function ItemList() {
  const [items, setItems] = useState(["Milk", "Powder", "Cheese"]);
  return (
    <>
      <AddItem onItemAdded={(item) => setItems([...items, item])} />
      <ol>
        {items.map(function (item, index) {
          return (
            <li key={index}>
              <div>{item}</div>
              <div>
                <UpdateItem
                  existingItem={item}
                  onItemUpdated={(old, val) => {
                    const index = items.indexOf(old);
                    if (index !== -1) {
                      items[index] = val;
                      setItems([...items]);
                    }
                  }}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}

// new item add

function AddItem({ onItemAdded }) {
  const [item, setItem] = useState("");
  function handleSubmit() {
    // pass this new item to other component via a function
    onItemAdded(item);
    // clear field
    setItem("");
  }
  return (
    <>
      <input
        placeholder="Enter item"
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

// existing item update
function UpdateItem({ existingItem, onItemUpdated }) {
  const [item, setItem] = useState(existingItem);
  function handleSubmit() {
    // pass this new item to other component via a function
    onItemUpdated(existingItem, item);
  }
  return (
    <>
      <input
        placeholder="Enter item"
        defaultValue={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleSubmit}>Change</button>
    </>
  );
}
