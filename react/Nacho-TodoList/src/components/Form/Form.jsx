export default function Form({ setState, state, onSubmit }) {
  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <form onSubmit={(e) => onSubmit(e)} className="form-group container">
      <input
        placeholder="Introducir un nuevo To-do"
        onChange={handleChange}
        value={state}
        className="form-control mb-3"
      />
    </form>
  );
}
