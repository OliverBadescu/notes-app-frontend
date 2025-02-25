import AddNote from "../AddNote/AddNote"
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/state/userContext";

export default function Header({ userId, onAddNote, onCategoryChange, selectedCategory   }){


  const {user, handleLogout} = useContext(UserContext);

   const navigate = useNavigate();

    const handleNavigation = (event, path) => {
        event.preventDefault(); 
        navigate(path);
        
    };

    const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);

    const handleLogOut = () => {
        if(user){
          navigate('/');
          handleLogout;
        }
    }

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

            <div className="buttons-container">
              <button className="add-notes" onClick={handleAddNoteClick}>
                Add Notes
              </button>
              <button className="log-out" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
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