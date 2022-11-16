import "./App.css";
import { useState } from "react";

function NotesAppContainer() {
  const [notes, setNotes] = useState([]);

  function NoteItem(props) {
    const { noteText, removeItemHandler, noteTitle } = props;

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

    return (
      <div className="notes">
        <div className="deleteBtnDiv">
          <button onClick={removeItemHandler} className="deleteBtn">
            X
          </button>
        </div>
        <h5>{noteTitle}</h5>
        <div>{noteText}</div>
        <div>{date}</div>
      </div>
    );
  }

  function onAddNoteClicked() {
    const newNote = "newNote";
    setNotes([...notes, newNote]);
  }

  const onRemoveItem = (itemIndex) => {
    if (window.confirm("Do you really want to delete this note?")) {
      const toDoItemsDuplicate = [...notes];
      toDoItemsDuplicate.splice(itemIndex, 1);
      setNotes(toDoItemsDuplicate);
    }
  };
  return (
    <div>
      <h3>Notes App</h3>
      <button onClick={onAddNoteClicked}>Add Note</button>
      <div className="notesList">
        {notes.map((item, index) => (
          <NoteItem
            noteText="Example note"
            noteTitle="Note Title"
            removeItemHandler={onRemoveItem}
            key={index}
          />
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
