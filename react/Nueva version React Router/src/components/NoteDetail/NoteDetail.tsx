import { Link, useLoaderData, Form} from "react-router-dom"
import { Note } from "../../interfaces/Note";

export default function NotesDetail() {

  const note = useLoaderData() as Note;

  const date = note ? new Date(note.createdAt) : new Date();

  return (
    <article>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <time dateTime={note.createdAt}>
        {date.toLocaleDateString(window.navigator.languages, {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </time>

      <Form method="post">
        <input type="hidden" name="id" value={note.id}/>
      </Form>

      <div>
        <Link to="edit">Edit note</Link>
      </div>
    </article>
  );
}
