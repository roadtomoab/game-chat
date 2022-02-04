import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Login ({ setCurrentUser }) {

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

    function handleSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...formData };
    
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        })
          .then((r) => r.json())
          .then((user) => {
            console.log(user);
            setCurrentUser(user)
            setFormData({
              username: "",
              password: "",
            });
          });
    }

    return (
    <div className='signup'>
        <form onSubmit={handleSubmit} spellCheck="false">
            <header>LOG IN</header>
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
            <NavLink to='/home'>
                <button type='submit'>
                    <span className='waiting'>. . .</span>
                    <span className='create-account'>SIGN IN</span>
                </button>
            </NavLink>
            <br></br>
            <br></br>
            <NavLink to='/signup'>Don't have account? Sign up here</NavLink>
        </form>
    </div>
    )
}

export default Login;