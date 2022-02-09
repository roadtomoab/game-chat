import Notes from './Notes'

function Home ({ notes, updateText, addNote, addToBookmarks }) {

    return (
        <div>
            <br></br>
            <br></br>
            <Notes
            notes={notes}
            updateText={updateText}
            addNote={addNote}
            addToBookmarks={addToBookmarks}
            />
        </div>
    )
}

export default Home;