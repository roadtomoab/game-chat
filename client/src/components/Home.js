import Notes from './Notes'
import NavBar from './NavBar';

function Home ({ notes, updateText, addNote, addToBookmarks, setCurrentUser }) {

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
            />
        </div>
    )
}

export default Home;