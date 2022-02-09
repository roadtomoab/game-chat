import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Signup ({ setCurrentUser, currentUser }) {

    const [ formData, setFormData ] = useState(
        {
            username: "",
            password: ""
        }
    )

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
            .then((r) => r.json())
            .then((user) => {
                setCurrentUser(user)
                setFormData({
                    username: "",
                    password: ""
                })
            })
        history.push("/home")
    }

    // {currentUser ?
    //     <Redirect to="/home" />
    // :

    // }


    
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit} spellCheck='false'>
                <header>SIGN UP</header>
                <input
                type='text'
                placeholder='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <input
                type='password'
                placeholder='password'
                autoComplete='on'
                name='password'
                value={formData.password}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button type='submit'>
                    <span className='waiting'>. . .</span>
                    <span className='create-account'>CREATE AN ACCOUNT</span>
                </button>
                <br></br>
                <br></br>
                <NavLink to='/login'>Already have account? Log in here</NavLink>
            </form>
        </div>
    )
}

export default Signup;