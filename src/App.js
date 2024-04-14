import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([{ name: "", age: "" }]);
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState("");

  function handleCh(e, index) {
    const { name, value } = e.target;

    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });

    setFiltered((prev) => data);
  }

  function add() {
    setData((prev) => [...data, { name: "", age: "" }]);
    setFiltered(data);
  }

  function handleFilter(e) {
    setFilter(e.target.value);
    const loweText = e.target.value.toLowerCase();

    if (loweText == "") {
      setFiltered(data);
    } else {
      const filtered = data.filter(
        (each) =>
          each.name.toLowerCase().includes(filter) || each.age == loweText
      );
      setFiltered(filtered);
    }
  }

  return (
    <>
      {data &&
        data.map((each, index) => (
          <div key={index} style={{ display: "flex" }}>
            <div>
              <label>name</label>
              <input
                value={each.name}
                name="name"
                onChange={(e) => handleCh(e, index)}
              />
            </div>

            <div>
              <label>age</label>
              <input
                value={each.age}
                name="age"
                onChange={(e) => handleCh(e, index)}
              />
            </div>
          </div>
        ))}

      <div>
        <button onClick={add}>Add</button>
      </div>
      <div>
        <input type="search" value={filter} onChange={handleFilter} />
      </div>
      <Table data={filtered} />
    </>
  );
}

function Table({ data }) {
  return (
    <>
      <table>
        <thead>
          <th>Name</th>
          <th>age</th>
        </thead>

        <tbody>
          {data &&
            data.map((each, index) => (
              <tr key={index}>
                <td>{each.name}</td>
                <td>{each.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;