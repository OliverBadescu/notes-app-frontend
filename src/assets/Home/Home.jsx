import Header from "../Header/Header"
import Note from "../Notes/Note"
import React, { useEffect, useState } from "react";
import { getAllUserNotes, deleteNote } from "../Notes/service.jsx";
import { Alert } from 'antd';

export default function Home(){

    let userId= 1;

    const [notes, setNotes] = useState([]);
    const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(null);

    const [filteredNotes, setFilteredNotes] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const fetchNotes = async () => {
      try {
        const data = await getAllUserNotes(userId);
        let response = data.body;
        setNotes(response.list);
        filterNotes(response.list, selectedCategory);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    const filterNotes = (notesList, category) => {
      if (category === "ALL") {
        setFilteredNotes(notesList); 
      } else {
        const filtered = notesList.filter(
          (note) => note.noteCategory === category
        );
        setFilteredNotes(filtered); 
      }
    };
  
    
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      filterNotes(notes, category); 
    };
  
    
    useEffect(() => {
      fetchNotes();
    }, [userId]);

    const handleDeleteNote = async(noteId) =>{
      try {
        
        await deleteNote(noteId);
        fetchNotes();  
        setIsDeleteSuccessful(true);
      } catch (error) {
        setIsDeleteSuccessful(false);
      }
    };

    const handleAddNote = () => {
      fetchNotes();
    };

    return(

        <>

            <div className="alert-container">
              {isDeleteSuccessful === true && (
                <Alert
                  message="Success"
                  description="Note deleted successfully!"
                  type="success"
                  showIcon
                  closable
                  onClose={() => setIsDeleteSuccessful(null)}
                />
              )}

              {isDeleteSuccessful === false && (
                <Alert
                  message="Error"
                  description="Failed to delete note."
                  type="error"
                  showIcon
                  closable
                  onClose={() => setIsDeleteSuccessful(null)}
                />
              )}
            </div>
            <Header 
                userId={userId}
                onAddNote={handleAddNote}
                onCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory}
            />
            
            <div className="notes-container">
              {filteredNotes.length > 0 &&
                filteredNotes.map((no) => (
                  <Note key={no.id} note={no} onDelete={handleDeleteNote} />
                ))}
            </div>
        </>
    )
}