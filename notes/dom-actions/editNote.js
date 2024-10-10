export const editNote = (note, notesContainer) => {

    const id = note.id;
    const noteElement = document.getElementById(id);

    // create web component
    const editComponent = document.createElement('edit-note-view');

    noteElement.innerHTML = '';

    // TODO: fill it with values

    noteElement.appendChild(editComponent);

};
