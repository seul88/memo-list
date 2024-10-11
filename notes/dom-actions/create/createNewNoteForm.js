export const createNewNoteForm = (addNoteView) => {
    const container = document.createElement('div');
    container.id = 'addNoteForm';

    const headerRow = document.createElement('div');
    headerRow.classList.add('add-note-title-row');

    const headerText = document.createElement('div');
    headerText.textContent = 'Add new note';
    headerText.classList.add('add-note-header-text');
    headerRow.appendChild(headerText);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => addNoteView.onCancelClick();
    cancelButton.classList.add('add-note-cancel-button');
    headerRow.appendChild(cancelButton);

    container.appendChild(headerRow);

    const titleForm = document.createElement('input');
    titleForm.oninput = (e) => addNoteView.onTitleChange(e.target.value);
    titleForm.placeholder = 'Note title';
    titleForm.classList.add('and-note-input-form');
    container.appendChild(titleForm);

    const bodyForm = document.createElement('textarea');
    bodyForm.rows = 7;
    bodyForm.oninput = (e) => addNoteView.onBodyChange(e.target.value);
    bodyForm.placeholder = 'Your note';
    bodyForm.classList.add('and-note-input-form');
    container.appendChild(bodyForm);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('add-note-save-button');
    saveButton.onclick = () => addNoteView.onSaveClick();
    container.appendChild(saveButton);

    return container;
};