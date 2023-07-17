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
  return (
    <div>
      <span>{text}</span>
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
