import {Form, useLoaderData, useLocation} from "react-router-dom"
import { Note } from "../../interfaces/Note"

export default function NoteForm() {
    const {key} = useLocation();

    const note = useLoaderData() as Note;
    return (
        <Form method="post">
            <h2>Note form</h2>
            <label>
                Title
                <input name="title" required defaultValue={note?.title} key={key}/>
            </label>
            <label>
                Body
                <textarea name="body" required defaultValue={note?.body} key={key}/>
            </label>
            <button>Submit</button>
        </Form>
    )
}