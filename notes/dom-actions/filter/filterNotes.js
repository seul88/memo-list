import { addNoteToDOM } from "../create/addNoteToDOM.js";

export const filterNotes = (searchPhrase, notesContainer) => {
    const notesListContainer = document.getElementById("notesList");
    while (notesListContainer.firstChild) {
        notesListContainer.removeChild(notesListContainer.firstChild);
    }

    if (searchPhrase.length) {
        const filteredNotes = notesContainer.notes.filter(item => item.title.includes(searchPhrase) || item.body.includes(searchPhrase));
        filteredNotes.forEach(note => {
            const newNoteElement = addNoteToDOM(note, 'note-item');
            notesListContainer.appendChild(newNoteElement);
        });
    } else {
        notesContainer.notes.forEach(note => {
            const newNoteElement = addNoteToDOM(note, 'note-item');
            notesListContainer.appendChild(newNoteElement);
        });
    }
};
