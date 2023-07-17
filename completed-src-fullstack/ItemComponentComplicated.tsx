import { useEffect, useState, useCallback } from "react";
import { API_URL } from "./constants";

type ItemComponentPropType = {
  text: String;
  id: Number;
  deleteItem: Function;
};

class DelayedAction {
  callback: any;
  delay: any;
  timer: any;
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timer = null;
  }

  performAction(id, text) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.callback(id, text);
    }, this.delay);
  }
}

const afterActionCB = (id, text) => {
  fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: text,
    }),
  });
};

export default function ItemComponent({
  text,
  id,
  deleteItem,
}: ItemComponentPropType) {
  const [textState, setTextState] = useState(text);
  const [actionHandler] = useState(new DelayedAction(afterActionCB, 1000));
  // useEffect(() => {
  //   fetch(API_URL + "/" + id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       value: textState,
  //     }),
  //   });
  // }, [textState]);

  useEffect(() => {
    actionHandler.performAction(id, textState);
  }, [textState]);

  // const onClickUpdate = () => {
  //   fetch(API_URL + "/" + id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       value: textState,
  //     }),
  //   });
  // };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTextState(ev.target.value);
  };

  return (
    <div>
      <input type="text" value={textState} onChange={handleChange} />
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
      {/* <button onClick={onClickUpdate}>Update</button> */}
    </div>
  );
}
