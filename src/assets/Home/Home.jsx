import Header from "../Header/Header"
import Note from "../Notes/Note"
import React, { useEffect, useState } from "react";
import { getAllUserNotes } from "../Notes/service.jsx";
import { Alert } from 'antd';

export default function Home(){

    let userId= 1;

    const [notes, setNotes] = useState([]);

    useEffect(() => {
      async function fetchNotes() {
        try {
          const data = await getAllUserNotes(userId);
          let response = data.body;
          setNotes(response.list); 
        } catch (error) {
          console.error("Error fetching notes:", error);
        }
      }
  
      fetchNotes();
    }, [userId]);

    return(

        <>
        
            <Header/>
            
            <div className="notes-container">
                {
                    notes.length > 0 && 
                        notes.map((no) => <Note key={no.id} note = {no} />)
                }   
            </div>
        </>
    )
}