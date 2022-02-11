import { useEffect, useState } from 'react';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'


function Note ({ note, updateText, addToBookmarks, noteForShow }) {

    const [editor] = useState(() => withReact(createEditor()))
    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: note.text }],
          id: note.id
        },
      ])

    const [ text, setText ] = useState(
        {   
            id: value[0].id,
            text: value[0].children[0].text
        }
    )
    
    // function updateTheText () {
    //     setText(
    //         {...text, 
    //         id: note.id})
    // }

    // useEffect(updateTheText, [])

    function keepNoteOnRefresh () {
        if (noteForShow != undefined) {
            console.log('hhefe')

            fetch(`/save_note/${note.id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(note),
              })
                .then((r) => r.json())
                .then((data) => {
                  console.log(data);
                });
        }
    }

    useEffect(keepNoteOnRefresh, [])

    // function handleChange(e) {
    //     setText(
    //         {...text,
    //         text: e.target.value})
    // }

    function handleChange(newValue) {
        setValue(newValue)
        console.log(newValue)

        setText(
            {...text,
            id: value[0].id,
            text: value[0].children[0].text
            }
        )
    }

    function handleUpdate(e) {
        e.preventDefault();
        updateText(text);
        setText(text)
    }

    function handleClick(e) {
        e.preventDefault();
        addToBookmarks(note);
    }

    return (
    <div className='note'>
        <p>topic: {note.topic}</p>
            <div>
                {/* <textarea
                onChange={handleChange}
                value={text.text}
                style={{minHeight: '300px'}}
                /> */}
                <Slate
                editor={editor}
                value={value}
                onChange={handleChange}>
                    <Editable />
                </Slate>
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

{/* <textarea
theme='snow'
onChange={handleChange}
value={text.text}
style={{minHeight: '300px'}}
/> */}
