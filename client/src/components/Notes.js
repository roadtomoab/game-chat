import Note from "./Note"
import AddNote from './AddNote';


function Notes ({ notes, updateText, addNote, addToBookmarks }) {
    return (
        <div>
            <AddNote addNote={addNote}/>
            {notes.map((note) => {
                return (
                    <Note
                    key={note.id}
                    note={note}
                    updateText={updateText}
                    addToBookmarks={addToBookmarks}
                    />
                )
            })}
        </div>
    )
}

export default Notes;