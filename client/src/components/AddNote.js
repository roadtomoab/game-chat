import { useState } from 'react'

function AddNote ({ addNote }) {

    const [ note, setNote ] = useState(
        {
            text: "",
            topic: ""
        }
    )

    function handleChange(e) {
        setNote({
            ...note,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit (e) {
        if (note.topic == "") {
            e.preventDefault();
            console.log("note can't be blank")
        }
        else {
        e.preventDefault();
        addNote(note);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='new-form'>
                <input
                placeholder='Type to set topic'
                value={note.topic}
                name='topic'
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <textarea
                placeholder='Type to add body'
                value={note.text}
                name='text'
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button type='submit'>Add New Note</button>
            </form>
        </div>
    )
}

export default AddNote;