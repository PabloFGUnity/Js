import { RouterProvider, createBrowserRouter, json, Navigate, redirect} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { createNote, deleteNote, getAllNotes, getNoteById, populate, updateNote } from "./models/notes";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NotesDetail from "./components/NoteDetail/NoteDetail";
import NoteForm from "./components/NoteForm/NoteForm";

// populate();


const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: "/",
    children: [
      {index: true, element: <Navigate to="notes"/> },
      {
        path: "notes",
        element: <NotesLayout/>,
        async loader() {
          const notes = await getAllNotes();
          console.log(notes);
          return json(notes)
        },
        children: [
          {index: true, element: <h1> Pick a note at the left</h1>},
          {
            path: "noteId",
            element: <NotesDetail/>,
            async loader({params}) {
              const note = await getNoteById(params.NoteId as string)
              json(note)
            },
            async action({request}) {
              const formData = await request.formData();
              const noteId = formData.get("id") as string
              await deleteNote(noteId)
              return redirect(`/notes`)
            }
          },
          {
            path:"new",
            element: <NoteForm/>,
            async action ({request}) {
              const formData = await request.formData();
              const title = formData.get("title") as string;
              const body = formData.get("body") as string;
              const note = await createNote(title,body);
              console.log(note);
              
              return redirect(`/note/${note.id}`)
            }
          },
          {
            path:":noteId/edit",
            element: <NoteForm/> ,
            async loader({params}){
              const note = await getNoteById(params.noteId as string)
              return json(note)
            },
            async action({params,request}) {
              // const {searchParams} = new URL(request.url);
              const noteId = params.noteId as string;
              const formData = await request.formData();
              const title = formData.get("title") as string;
              const body = formData.get("body") as string;
              await updateNote(noteId,title,body);
              return redirect(`/notes/${noteId}`);
            }
          }
        ]
      }
    ]
  },
  {
    path: "notes",
    element: <NotesLayout/>
  }
])

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
