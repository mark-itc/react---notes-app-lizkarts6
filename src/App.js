import "./App.css";
import { useState } from "react";

function NotesAppContainer() {
  const [notes, setNotes] = useState([]);
  let now = new Date(),
    date =
      now.getDate() +
      "/" +
      (now.getMonth() + 1) +
      "/" +
      now.getFullYear() +
      " " +
      now.getHours() +
      ":" +
      now.getMinutes();

  function onAddNoteClicked() {
    const newNote = "newNote";
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <h3>Notes App</h3>
      <button onClick={onAddNoteClicked}>Add Note</button>
      <div className="notesList">
        {notes.map((item) => (
          <div className="notes">example note {date}</div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <NotesAppContainer />
    </div>
  );
}

export default App;
