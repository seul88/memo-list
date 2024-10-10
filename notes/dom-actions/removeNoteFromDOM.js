export const removeNoteFromDOM = (note, notesContainer) => {

    const deleteNote = (note) => {
        notesContainer.removeNote(note.id);
        document.getElementById(note.id).remove();
    };

    const onClose = (dialog) => {
        document.querySelector('.dialog-overlay').style.display = 'none';
        dialog.close();
        document.getElementById(`delete-dialog-${note.id}`).remove();
    };

    const overlay = document.createElement('div');
    overlay.classList.add('dialog-overlay');
    document.body.appendChild(overlay);
    document.querySelector('.dialog-overlay').style.display = 'block';

    const dialog = document.createElement('dialog');
    dialog.id = `delete-dialog-${note.id}`;
    const deleteNoteWrapper = document.createElement('div');

    const deleteNoteHeader = document.createElement('div');
    deleteNoteHeader.textContent = 'Delete Note';
    // add class
    deleteNoteWrapper.appendChild(deleteNoteHeader);

    const deleteNoteInfo = document.createElement('div');
    deleteNoteInfo.textContent = 'Are you sure you want to delete this note?';
    // add class 
    deleteNoteWrapper.appendChild(deleteNoteInfo);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel'
    // add class
    cancelButton.onclick = () => onClose(dialog);
    deleteNoteWrapper.appendChild(cancelButton);

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Delete'
    // add class
    applyButton.onclick = () => {
        deleteNote(note);
        onClose(dialog);
    };
    deleteNoteWrapper.appendChild(applyButton);

    dialog.appendChild(deleteNoteWrapper);
    const container = document.getElementById('notesContainer');
    container.appendChild(dialog);
    dialog.showModal();
};