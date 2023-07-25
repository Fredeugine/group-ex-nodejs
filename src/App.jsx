import { useRef, useState, useEffect } from "react";
import "./App.css";
import ItemComponent from "./ItemComponent";
import { API_URL } from "./constants";

function App() {
  const inputRef = useRef();
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });
    let responseJson = await response.json();
    let receivedData = responseJson.list;

    if (localStorage.getItem("sortType") === "recent") {
      receivedData.sort((a, b) => a.timestamp - b.timestamp);
    } else {
      receivedData.sort((a, b) => b.timestamp - a.timestamp);
    }
    setDataList(responseJson.list);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    let response = await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    getData();
  };

  const setSortType = (typeArg) => {
    localStorage.setItem("sortType", typeArg);
  };

  const sortByRecent = () => {
    let dataArrayCopy = [...dataList];
    dataArrayCopy.sort((a, b) => a.timestamp - b.timestamp);
    setDataList(dataArrayCopy);
    setSortType("recent");
  };

  const sortByOldest = () => {
    let dataArrayCopy = [...dataList];
    dataArrayCopy.sort((a, b) => b.timestamp - a.timestamp);
    setDataList(dataArrayCopy);
    setSortType("oldest");
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

      <button onClick={sortByRecent}>Sort by Recent</button>
      <button onClick={sortByOldest}>Sort by Oldest</button>

      <div>
        {dataList.map((el) => (
          <ItemComponent
            key={el.id + "itemcomp"}
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
