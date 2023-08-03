import ListItem from "../ListItem/ListItem";

export default function List({ items, setState }) {
  function removeItem(e, id) {
    e.stopPropagation();
    setState(items.filter((item) => item.id !== id));
  }

  function toogleState(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setState(newItems);
  }
  return (
    <ul className="list-group container">
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          index={index}
          toogleState={toogleState}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
}
