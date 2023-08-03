import { useState, useEffect, useMemo } from "react";
import { getAllNotes } from "../models/notes";
import { Note } from "../interfaces/Note";

export default function useNotes(): { status: string; notes: Note[] } {
  const [status, setStatus] = useState("loading");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setStatus("loading");
    getAllNotes()
      .then(setNotes)
      .finally(() => setStatus("done"));
  }, []);

  return useMemo(() => {
    return { status, notes };
  }, [status, notes]);
}
