import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function NavBar ({ setCurrentUser }) {

    let history = useHistory();

    function handleClick () {
        fetch("/logout", {method: "DELETE"})
        .then(res => {
            if (res.ok) {
                setCurrentUser(null)
            }
        })
        history.push("/");
    }

    return (
        <div className="navbar">
            <NavLink to="/bookmarks">
                <button>Bookmarks</button>
            </NavLink>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default NavBar;