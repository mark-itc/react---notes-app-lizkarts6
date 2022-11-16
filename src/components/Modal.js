import "./Modal.css";

export const Modal1 = (props) => {
  const { title, text, date, closeModal } = props;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <button onClick={()=>closeModal}>Close</button>
    </div>
  );
};
