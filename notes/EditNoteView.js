export class EditNoteView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadStyles();
        this.render();
    }

    loadStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @import url('../css/edit-note.css');
        `;

        this.shadowRoot.appendChild(style);
    }

    render() {
        const style = document.createElement('style');

        this.innerHTML = '';
        this.shadowRoot.appendChild(style);
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
        cancelButton.onclick = () => this.onCancelClick();
        cancelButton.classList.add('edit-note-cancel-button');
        headerRow.appendChild(cancelButton);

        container.appendChild(headerRow);

        const titleForm = document.createElement('input');
        titleForm.oninput = (e) => this.onTitleChange(e.target.value);
        titleForm.placeholder = 'Note title';
        titleForm.classList.add('edit-note-input-form');
        container.appendChild(titleForm);

        const bodyForm = document.createElement('textarea');
        bodyForm.rows = 7;
        bodyForm.oninput = (e) => this.onBodyChange(e.target.value);
        bodyForm.placeholder = 'Your note';
        bodyForm.classList.add('edit-note-input-form');
        container.appendChild(bodyForm);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('edit-note-save-button');
        saveButton.onclick = () => this.onSaveClick();
        container.appendChild(saveButton);

        this.shadowRoot.appendChild(container);
    }
}

