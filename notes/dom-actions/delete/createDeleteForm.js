export const createDeleteForm = (onClose, note) => {
    const notesContainer = document.querySelector('notes-container');
    const dialog = document.getElementById(`delete-dialog-${note.id}`);

    const deleteNote = (note) => {
        notesContainer.removeNote(note.id);
        document.getElementById(note.id).remove();
    };

    const deleteNoteWrapper = document.createElement('div');
    deleteNoteWrapper.classList.add('delete-note-container');

    const deleteNoteHeader = document.createElement('div');
    deleteNoteHeader.textContent = 'Delete Note';
    deleteNoteHeader.classList.add('delete-note-header-text');
    deleteNoteWrapper.appendChild(deleteNoteHeader);

    const deleteNoteInfo = document.createElement('div');
    deleteNoteInfo.textContent = 'Are you sure you want to delete this note?';
    deleteNoteInfo.classList.add('delete-note-info-text');
    deleteNoteWrapper.appendChild(deleteNoteInfo);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel'
    cancelButton.classList.add('delete-note-cancel-button');
    cancelButton.onclick = () => onClose(dialog);
    deleteNoteWrapper.appendChild(cancelButton);

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Delete'
    applyButton.classList.add('delete-note-apply-button');
    applyButton.onclick = () => {
        deleteNote(note);
        onClose(dialog);
    };
    deleteNoteWrapper.appendChild(applyButton);

    return deleteNoteWrapper;
};