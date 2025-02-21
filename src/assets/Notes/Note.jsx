import React from "react";


export default function Note({ note }) {

  return (
    <div className="note-card">
      <span className={`side-stick ${note.noteCategory}`} />
      <h5 className="note-title">
        {note.title} <span className={`category-dot ${note.noteCategory}`} />
      </h5>
      <p className="note-date">{note.createDate}</p>
      <p className="note-content">{note.description}</p>
      <div className="note-footer">
        <span className="icon">
          <i className="fa fa-star"></i>
        </span>
        <span className="icon">
          <i className="fa fa-trash"></i>
        </span>
        <span className={`category-icon ${note.noteCategory}`}>
          <i className={`fa ${note.noteCategory === "BUSINESS" ? "fa-briefcase" : note.noteCategory === "SOCIAL" ? "fa-users" : "fa-exclamation-circle"}`}></i>
        </span>
      </div>
    </div>
  );
}
