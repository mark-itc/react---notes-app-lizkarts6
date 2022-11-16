import { useState } from "react";
import Modal from "react-modal";
import { Modal1 } from "./Modal";
import "./Notes.css";

export function NotesAppContainer() {
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

    Modal.setAppElement(document.getElementById("root"));

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <div className="notes" onClick={openModal}>
        <h5>{noteTitle}</h5>
        <div>{noteText}</div>
        <div>{date}</div>
        <div className="deleteBtnDiv">
          <button onClick={removeItemHandler} className="deleteBtn">
            X
          </button>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <Modal1
            closeModal={closeModal}
            title={props.noteTitle}
            text={props.noteText}
            date={date}
          />
        </Modal>
      </div>
    );
  }

  function onAddNoteClicked() {
    const newNote = "newNote";
    setNotes([...notes, newNote]);
  }

  const onRemoveItem = (itemIndex) => {
    if (window.confirm("Are you 100% sure you want to delete this note?")) {
      const toDoItemsDuplicate = [...notes];
      toDoItemsDuplicate.splice(itemIndex, 1);
      setNotes(toDoItemsDuplicate);
    }
  };
  return (
    <div>
      <h3>Notes App</h3>
      <button onClick={onAddNoteClicked} className="add-note-button">
        Add Note
      </button>
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

