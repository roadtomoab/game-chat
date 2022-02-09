import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

//components
import ArrivalPage from './components/ArrivalPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const [ notes, setNotes ] = useState([])
  const [ bookmarks, setBookmarks ] = useState()

  // fetch all notes from API
  function fetchNotes () {
    fetch("/notes")
    .then(r => r.json())
    .then(data => setNotes(data))
  };

  useEffect(fetchNotes, []);

  function fetchBookmarks () {
    fetch("/bookmarks")
    .then(r => r.json())
    .then(data => setBookmarks(data))
  };

  useEffect(fetchBookmarks, []);

  function addToBookmarks (clickedNote) {

    const updatedBookmarksArray = bookmarks.find((object) => object.id === clickedNote.id)

    if (updatedBookmarksArray === undefined) {

      const bookmarkObj = { 

          user_id: currentUser.id,
          note_id: clickedNote.id
        
      }

      fetch("/bookmarks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookmarkObj),
      })
      .then(r => r.json())
      .then(data => console.log(data));

      setBookmarks([...bookmarks, clickedNote])
    }
    else {
      console.log("duplicate")
    }
  }

  // check to see if user session is stored, set current user
  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);

  function updateText (clickedNote) {
    console.log("clicked note: ", clickedNote)

    const noteObj = { 

      text: clickedNote.text,
      topic: clickedNote.topic,
      user_id: currentUser.id
    
  }

    fetch(`/notes/${clickedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(noteObj)
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }

  function addNote (clickedNote) {

    const updatedNotesArray = notes.find((object) => object.topic === clickedNote.topic)

    if (updatedNotesArray === undefined) {

      // start post request

      const noteObj = { 

          text: clickedNote.text,
          topic: clickedNote.topic,
          user_id: currentUser.id
        
      }

      fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj),
      })
      .then(r => r.json())
      .then(data => console.log(data));

      setNotes([...notes, clickedNote])
    }
    else {
      console.log("duplicate")
    }
  
    console.log("new note here: ", clickedNote)
  }

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <ArrivalPage />
        </Route>

        <Route path="/signup">
          <Signup 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}/>
        </Route>

        <Route path="/login">
          <Login 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}/>
        </Route>

        <Route path="/home"> 
          <Home
          notes={notes}
          updateText={updateText}
          addNote={addNote}
          addToBookmarks={addToBookmarks}
          setCurrentUser={setCurrentUser}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
