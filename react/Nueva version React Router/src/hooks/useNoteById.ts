import { useState, useEffect, useMemo } from "react";
import { getNoteById } from "../models/notes";
import { Note } from "../interfaces/Note";

export default function useNoteById(noteId: string): {
  status: string;
  note: Note | null;
} {
  const [status, setStatus] = useState("loading");
  const [note, setNote] = useState(null);

  useEffect(() => {
    setStatus("loading");
    getNoteById(noteId)
      .then(setNote)
      .finally(() => setStatus("done"));
  }, [noteId]);

  return useMemo(() => {
    return { status, note };
  }, [status, note]);
}
