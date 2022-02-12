import { useEffect, useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsSave2, BsSave2Fill, BsTrash } from "react-icons/bs"

function Note ({ note, updateText, addToBookmarks, updateTopic, deleteNote }) {

    const [ isBookmarked, setIsBookmarked ] = useState(false)
    const [ isSaved, setIsSaved ] = useState(false)

    const [ topic, setTopic ] = useState(
        {
            id: null,
            topic: note.topic
        }
    )

    function updateTheTopic () {
        setTopic(
            {...topic,
            id: note.id}
        )
    }

    useEffect(updateTheTopic, [])

    function handleTopicChange(e) {
        setTopic(
            {...text,
            topic: e.target.value}
        )
        setIsSaved(false)
    }

    const [ text, setText ] = useState(
        {   
            id: null,
            text: note.text,
        }
    )

    
    function updateTheText () {
        setText(
            {...text, 
            id: note.id})
    }

    useEffect(updateTheText, [])

    function handleChange(e) {
        setText(
            {...text,
            text: e.target.value}
        )
        setIsSaved(false)
    }

    function handleUpdate(e) {
        e.preventDefault();
        updateText(text);
        setText(text)
        updateTopic(topic)
        setTopic(topic)
        setIsSaved(true)
    }

    function handleClick(e) {
        e.preventDefault();
        addToBookmarks(note);
        setIsBookmarked(true)
    }

    function handleDelete(e) {
        e.preventDefault();
        deleteNote(note);
    }

    return (
    <div id='note'>
        <div className='note'>
            <textarea
            className='topic-editor'
            value={topic.topic}
            onChange={handleTopicChange}/>
            <textarea
            className='editor'
            onChange={handleChange}
            value={text.text}
            />
            <div className='icon-container'>
                <div onClick={handleUpdate} className='icon'>
                {isSaved ? <BsSave2Fill/> : <BsSave2/>}
                </div>
                <br></br>
                <div onClick={handleClick} className='icon'>
                {isBookmarked ? <BsBookmarkFill/> : <BsBookmark/>}
                </div>
                <br></br>
                <div onClick={handleDelete}>
                    <BsTrash />
                </div>
            </div>
        </div>
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

// working component with slate editor

// import { useEffect, useState } from 'react';
// import { createEditor } from 'slate'
// import { Slate, Editable, withReact } from 'slate-react'
// import Toolbar from './Toolbar';


// function Note ({ note, updateText, addToBookmarks, noteForShow }) {


//     const [editor] = useState(() => withReact(createEditor()))
//     const [value, setValue] = useState([
//         {
//           type: 'paragraph',
//           children: [{ text: note.text }],
//           id: note.id
//         },
//       ])

//     const [ text, setText ] = useState(
//         {   
//             id: value[0].id,
//             text: value[0].children[0].text
//         }
//     )
    
//     function updateTheText () {
//         setText(
//             {...text, 
//             id: note.id})
//     }

//     useEffect(updateTheText, [])

//     function keepNoteOnRefresh () {
//         if (noteForShow != undefined) {
//             console.log('hhefe')

//             fetch(`/save_note/${note.id}`, {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(note),
//               })
//                 .then((r) => r.json())
//                 .then((data) => {
//                   console.log(data);
//                 });
//         }
//     }

//     useEffect(keepNoteOnRefresh, [])

//     // function handleChange(e) {
//     //     setText(
//     //         {...text,
//     //         text: e.target.value})
//     // }

//     function handleChange(newValue) {
//         setValue(newValue)
//         console.log(newValue)

//         setText(
//             {...text,
//             id: value[0].id,
//             text: value[0].children[0].text
//             }
//         )
//     }

//     function handleUpdate(e) {
//         e.preventDefault();
//         updateText(text);
//         setText(text)
//     }

//     function handleClick(e) {
//         e.preventDefault();
//         addToBookmarks(note);
//     }

//     return (
//     <div className='note'>
//         <p>topic: {note.topic}</p>
//             <div>
//                 <div className="editor">
//                 <Toolbar />
//                 <Slate
//                 editor={editor}
//                 value={value}
//                 onChange={handleChange}>
//                     <Editable />
//                 </Slate>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <button onClick={handleUpdate}>update</button>
//                 <br></br>
//             </div>
//         <button onClick={handleClick}>bookmark</button>
//     </div>
//     )
// }

// export default Note;
