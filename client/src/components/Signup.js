import { useState } from 'react'

function Signup () {

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
    
    return (
        <div>
            <h1>Welcome to Tetris Chat. Create an account to get started.</h1>
            <form>
                <input
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                ></input>

                <input
                type="text"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                ></input>
            </form>
        </div>
    )
}

export default Signup;