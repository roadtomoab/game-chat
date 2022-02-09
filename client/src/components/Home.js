import Notes from './Notes'
import NavBar from './NavBar';

function Home ({ notes, updateText, addNote, addToBookmarks, setCurrentUser, openEditor }) {

    return (
        <div>
            <NavBar setCurrentUser={setCurrentUser}/>
            <br></br>
            <br></br>
            <Notes
            notes={notes}
            updateText={updateText}
            addNote={addNote}
            addToBookmarks={addToBookmarks}
            openEditor={openEditor}
            />
        </div>
    )
}

export default Home;