import AddNote from "../AddNote/AddNote"
import React, { useState } from "react";

export default function Header({ userId, onAddNote, onCategoryChange, selectedCategory   }){

    const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);

    const handleAddNoteClick = () => {
     setIsAddNoteVisible(true);
    };

    const handleCloseAddNote = () => {
        setIsAddNoteVisible(false);
    };

    const handleCategoryClick = (category) => {
        onCategoryChange(category); 
      };

      return (
        <>
          <div className="notes-header">
            <ul className="notes-nav">
              <li>
                <button
                  className={selectedCategory === "ALL" ? "active" : ""}
                  onClick={() => handleCategoryClick("ALL")}
                >
                  All Notes
                </button>
              </li>
              <li>
                <button
                  className={selectedCategory === "BUSINESS" ? "active" : ""}
                  onClick={() => handleCategoryClick("BUSINESS")}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className={selectedCategory === "SOCIAL" ? "active" : ""}
                  onClick={() => handleCategoryClick("SOCIAL")}
                >
                  Social
                </button>
              </li>
              <li>
                <button
                  className={selectedCategory === "IMPORTANT" ? "active" : ""}
                  onClick={() => handleCategoryClick("IMPORTANT")}
                >
                  Important
                </button>
              </li>
            </ul>
            <button className="add-notes" onClick={handleAddNoteClick}>
              Add Notes
            </button>
          </div>
    
          {isAddNoteVisible && (
            <AddNote
              userId={userId}
              onClose={handleCloseAddNote}
              onAddNote={onAddNote}
            />
          )}
        </>
      );


}