import { useHistory } from 'react-router-dom'

function NotePreview ({ note, openEditor }) {

    let history = useHistory();

    function handleOpenEditor(e) {
        e.preventDefault();
        openEditor(note);
        history.push(`/note/${note.id}`)
    }

    return (
        <div onClick={handleOpenEditor} className='note-preview'>
            <p>topic: {note.topic}</p>
        </div>
    )
}

export default NotePreview;