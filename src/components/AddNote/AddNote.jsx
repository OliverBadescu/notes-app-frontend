import React, { useState } from "react";
import { addNote } from "../../services/api/serviceNotes.jsx"; 
import { Button, Input, Select, Modal } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export default function AddNote({ userId, onClose, onAddNote }) {
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    noteCategory: "BUSINESS", 
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value.toUpperCase() });
  };


  const handleCategoryChange = (value) => {
    setNoteData({ ...noteData, noteCategory: value });
  };


  const handleSubmit = async () => {
    try {
      
      await addNote(userId, noteData);

    
      onAddNote();

      
      onClose();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <Modal
      title="Add New Note"
      open={true} 
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Add Note
        </Button>,
      ]}
    >
      <div className="add-note-form">
        <Input
          name="title"
          placeholder="Title"
          value={noteData.title}
          onChange={handleInputChange}
        />
        <TextArea
          name="description"
          placeholder="Description"
          value={noteData.description}
          onChange={handleInputChange}
          rows={4}
        />
        <Select
          defaultValue="BUSINESS"
          style={{ width: "100%", marginTop: "10px" }}
          onChange={handleCategoryChange}
        >
          <Option value="BUSINESS">Business</Option>
          <Option value="SOCIAL">Social</Option>
          <Option value="IMPORTANT">Important</Option>
        </Select>
      </div>
    </Modal>
  );
}