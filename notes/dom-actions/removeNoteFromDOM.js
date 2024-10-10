export const removeNoteFromDOM = (note, notesContainer) => {
    notesContainer.removeNote(note.id);
    document.getElementById(note.id).remove();
};