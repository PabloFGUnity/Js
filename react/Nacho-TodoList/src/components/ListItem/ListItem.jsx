export default function ListItem({ item, removeItem, toogleState, index }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        item.completed && "list-group-item-dark"
      }`}
      onClick={() => toogleState(index)}
    >
      <span className={`${item.completed && "text-decoration-line-through"} `}>
        {item.title}
      </span>
      <button
        onClick={(e) => removeItem(e, item.id)}
        className="btn btn-danger "
      >
        X
      </button>
    </li>
  );
}
