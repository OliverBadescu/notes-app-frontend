import React, { useState } from "react";




export default function Note({ note, onDelete }) {

  const [isStarActive, setIsStarActive] = useState(false);



  const toggleStar = () => {
    setIsStarActive(!isStarActive);
  };

  const handleDelete = () => {
    onDelete(note.id); 
  };


  return (
    <div className="note-card">
      <span className={`side-stick ${note.noteCategory}`} />
      <h5 className={`note-title note-${note.noteCategory.toLowerCase()}`}>
        {note.title}{" "}
        <span className={`category-dot-${note.noteCategory.toLowerCase()}`}>
          <i className="fa-solid fa-circle"></i>
        </span>
      </h5>
      <p className="note-date">{note.date}</p>
      <p className="note-content">{note.description}</p>
      <div className="note-footer">
      <span className="icon" onClick={toggleStar}>
          <i
            className={`fa fa-star ${isStarActive ? "star-active" : ""}`}
          ></i>
        </span>
        <span className="icon" onClick={handleDelete}>
          <i className="fa fa-trash"></i>
        </span>
        <span className={`category-icon ${note.noteCategory}`}>
          <i
            className={`fa ${
              note.noteCategory === "BUSINESS"
                ? "fa-briefcase"
                : note.noteCategory === "SOCIAL"
                ? "fa-users"
                : "fa-exclamation-circle"
            }`}
          ></i>
        </span>
      </div>
    </div>
  );
}
