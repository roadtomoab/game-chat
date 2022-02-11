import NotePreview from "./NotePreview"
import AddNote from './AddNote';
import { useState } from 'react';
import SearchBar from "./SearchBar";


function Notes ({ notes, updateText, addNote, addToBookmarks, openEditor }) {
     
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

   
    return (
        <div>
            <div className="Search">
                <input
                className="SearchInput"
                type="text"
                onChange={handleChange}
                />
            </div>
            <br></br>
            <AddNote addNote={addNote}/>
            {notes.filter((note) => {
                if (searchTerm == "") {
                    return note;
                }
                else if (note.topic.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return note;
                }
            }).map((note) => {
                return (
                    <NotePreview
                    key={note.id}
                    note={note}
                    updateText={updateText}
                    addToBookmarks={addToBookmarks}
                    openEditor={openEditor}
                    />
                )
            })
        }
        </div>
    )
}

export default Notes;