export const createEditNoteForm = (editNoteView) => {
    const container = document.createElement('div');
    container.id = 'editNoteForm';

    const headerRow = document.createElement('div');
    headerRow.classList.add('edit-note-title-row');

    const headerText = document.createElement('div');
    headerText.textContent = 'Edit note';
    headerText.classList.add('edit-note-header-text');
    headerRow.appendChild(headerText);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => editNoteView.onCancelClick();
    cancelButton.classList.add('edit-note-cancel-button');
    headerRow.appendChild(cancelButton);

    container.appendChild(headerRow);

    const titleForm = document.createElement('input');
    titleForm.onblur = (e) => editNoteView.onTitleChange(e.target.value);
    titleForm.placeholder = 'Note title';
    titleForm.defaultValue = editNoteView._title;
    titleForm.classList.add('edit-note-input-form');
    container.appendChild(titleForm);

    const bodyForm = document.createElement('textarea');
    bodyForm.rows = 7;
    bodyForm.onblur = (e) => editNoteView.onBodyChange(e.target.value);
    bodyForm.placeholder = 'Your note';
    bodyForm.defaultValue = editNoteView._body;
    bodyForm.classList.add('edit-note-input-form');
    container.appendChild(bodyForm);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('edit-note-save-button');
    saveButton.onclick = () => editNoteView.onSaveClick();
    container.appendChild(saveButton);

    return container;
};
