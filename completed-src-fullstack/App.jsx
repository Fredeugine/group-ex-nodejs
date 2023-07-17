import { useRef, useState, useEffect } from "react";
import ItemComponent from "./ItemComponent";
import "./App.css";

const API_URL = "http://localhost:3001/api/items";

function App() {
  const inputRef = useRef();
  const [dataList, setDataList] = useState([]);

  const deleteItem = async (id) => {
    await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });
    let responseJson = await response.json();
    setDataList(responseJson.list);
  };

  return (
    <div className="main-content">
      <input ref={inputRef} type="text" />
      <button
        onClick={async () => {
          let text = inputRef.current.value;

          let response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: text,
            }),
          });
          let responseJson = await response.json();
          setDataList(responseJson.list);
        }}
      >
        Save
      </button>

      <div>
        {dataList.map((el) => (
          <ItemComponent
            deleteItem={deleteItem}
            text={el.content}
            id={el.id}
          ></ItemComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
