import {  useState } from "react";
import {Outlet, useLoaderData } from "react-router"
import {NavLink}  from "react-router-dom"
import useNotes from "../../hooks/useNotes";
import Spinner from "../Spinner";
import { Note } from "../../interfaces/Note";



export default function NotesLayout() {
  const notes = useLoaderData() as Note[];
  const { status } = useNotes();
  const [sort, setSort] = useState("id");
  const [dir, setDir] = useState("desc");

  if (status === "loading") return <Spinner />;

  const sorted = [...notes].sort((noteA, noteB) => {
    if (sort in noteA) {
      if (dir === "desc")
        return noteA[sort as keyof typeof noteA].localeCompare(
          noteB[sort as keyof typeof noteB]
        );
      else
        return noteB[sort as keyof typeof noteB].localeCompare(
          noteA[sort as keyof typeof noteA]
        );
    } else {
      if (dir === "desc") return noteA.id.localeCompare(noteB.id);
      else return noteB.id.localeCompare(noteA.id);
    }
  });

  return (
    <section>
      <nav>
        <form
          method="get"
          onSubmit={(event) => {
            event.preventDefault();
            setDir(
              (
                event.currentTarget.elements.namedItem(
                  "dir"
                ) as HTMLSelectElement
              ).value
            );

            setSort(
              (
                event.currentTarget.elements.namedItem(
                  "sort"
                ) as HTMLSelectElement
              ).value
            );
          }}
        >
          <label>
            Sort by:
            <select name="sort" defaultValue={sort}>
              <option value="id">ID</option>
              <option value="title">Title</option>
              <option value="body">Body</option>
              <option value="createdAt">Created at</option>
            </select>
          </label>

          <label>
            Direction:
            <select name="dir" defaultValue={dir}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>

          <button>Sort</button>
        </form>

        <ul>
          <li>
            <NavLink to="new"> </NavLink>
          </li>
          {sorted.map((note) => {
            return (
              <li key={note.id}>
                  <NavLink to={note.id}>{note.title}</NavLink>
              </li>
            );
          })}
          <li>
            <NavLink to="RANDOM">  </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet/>
    </section>
  );
}
