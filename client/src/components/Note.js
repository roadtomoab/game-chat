import { useEffect, useState } from 'react'

function Note ({ note, updateText, addToBookmarks }) {

    const [ text, setText ] = useState(
        {   
            id: null,
            text: note.text
        }
    )

    console.log(text)

    function updateTheText () {
        setText(
            {...text, 
            id: note.id})
    }

    useEffect(updateTheText, [])

    function handleChange(e) {
        setText(
            {...text,
            text: e.target.value})
    }

    function handleUpdate(e) {
        e.preventDefault();
        updateText(text);
        setText(text)
    }

    function handleClick(e) {
        e.preventDefault();
        addToBookmarks(note)
    }

    return (
        <div className='note'>
            <p>topic: {note.topic}</p>
            {/* <p>creator: {note.user.username}</p> */}
            <div>
                <textarea
                onChange={handleChange}
                value={text.text}
                />
                <br></br>
                <br></br>
                <button onClick={handleUpdate}>update</button>
                <br></br>
            </div>
            <button onClick={handleClick}>bookmark</button>
        </div>
    )
}

export default Note;