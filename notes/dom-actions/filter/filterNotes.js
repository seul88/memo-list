import { addNoteToDOM } from "../create/addNoteToDOM.js";

export const filterNotes = (searchPhrase, notesContainer) => {
    const parentElement = document.getElementById("notesList");
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    if (searchPhrase.length) {
        const filteredNotes = notesContainer.notes.filter(item => item.title.includes(searchPhrase) || item.body.includes(searchPhrase));
        filteredNotes.forEach(note => addNoteToDOM(note, notesContainer));
    } else {
        notesContainer.notes.forEach(note => addNoteToDOM(note, notesContainer));
    }
};
