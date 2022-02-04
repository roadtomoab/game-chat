import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

//components
import ArrivalPage from './components/ArrivalPage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)

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

      </Switch>
    </div>
  );
}

export default App;
