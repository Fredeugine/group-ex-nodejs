import { useEffect, useState } from "react";
import { API_URL } from "./constants";

type ItemComponentPropType = {
  text: String;
  id: Number;
  deleteItem: Function;
};

export default function ItemComponent({
  text,
  id,
  deleteItem,
}: ItemComponentPropType) {
  const [textState, setTextState] = useState(text);

  useEffect(() => {
    fetch(API_URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: textState,
      }),
    });
  }, [textState]);

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
    </div>
  );
}
