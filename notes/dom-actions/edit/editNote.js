export const editNote = (note) => {

    const id = note.id;
    const noteElement = document.getElementById(id);

    const editComponent = document.createElement('edit-note-view');

    editComponent.title = note.title;
    editComponent.body = note.body;
    editComponent.id = note.id;
    const originalNote = { ...note };
    editComponent.originalNote = originalNote;

    editComponent.setAttribute('title', note.title);
    editComponent.setAttribute('body', note.body);
    editComponent.setAttribute('id', note.id);
    editComponent.setAttribute('originalnote', originalNote);

    noteElement.innerHTML = '';

    noteElement.appendChild(editComponent);
};
