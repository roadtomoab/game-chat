import { NavLink } from 'react-router-dom'

function ArrivalPage () {
    return (
        <div className="home-wrapper">
            <div className="home">
                <header>WELCOME TO NOTE SHARE</header>
                <NavLink to="/signup">
                    <button className="button">ENTER</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ArrivalPage;