import NotePreview from "./NotePreview"
import AddNote from './AddNote';


function Notes ({ notes, updateText, addNote, addToBookmarks, openEditor }) {
    return (
        <div>
            <AddNote addNote={addNote}/>
            {notes.map((note) => {
                return (
                    <NotePreview
                    key={note.id}
                    note={note}
                    updateText={updateText}
                    addToBookmarks={addToBookmarks}
                    openEditor={openEditor}
                    />
                )
            })}
        </div>
    )
}

export default Notes;