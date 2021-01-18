import React, { useState } from "react";

function Three() {
  const items = [
    {
      id: 1,
      description: "To-Do",
    },
  ];

  const [tasks, setTasks] = useState(items);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addItems = () => {
    if (item !== "") {
      setTasks([...tasks, { id: Math.random(), description: item }]);
      setItem("");
    }
  };

  const deleteItems = (id) => {
    setTasks([...tasks.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <table className="content-table">
        <tbody>
          {tasks.map(({ id, description }) => (
            <tr key={id}>
              <td>{description}</td>
              <button onClick={() => deleteItems(id)}>×</button>
            </tr>
          ))}
          <input
            type="text"
            value={item}
            placeholder="Enter task...."
            onChange={handleChange}
          />
          <button onClick={addItems}>Add</button>
        </tbody>
      </table>
    </div>
  );
}

export default Three;
