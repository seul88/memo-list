export class EditNoteView extends HTMLElement {
    _title;
    _body;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadStyles();
        this._title = '';
        this._body = '';
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'body'];
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get body() {
        return this._body;
    }

    set body(body) {
        this._body = body;
    }

    onCancelClick() {
        this._title = '';
        this._body = '';
        /* TODO: restore default view */ 
        this.clean();
    }

    onTitleChange(text) {
        this.title = text;
    }

    onBodyChange(text) {
        this.body = text;
    }

    onSaveClick() {

        const notes = document.querySelector('notes-container');
        // implement the function
       /* notes.updateNote(id, {
            title: this.title,
            body: this.body, 
            date: Date.now()
        });
        */ 
        /* TODO: restore default view */ 
        this._title = '';
        this._body = '';
        this.clean();
    };

    loadStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @import url('../css/edit-note.css');
            @import url('../css/note-item.css');

        `;
        this.shadowRoot.appendChild(style);
    }

    render() {
        this.innerHTML = '';
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

    clean() {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();

        // todo: add default view 
        
        /* temp values */
        const newNote = {
            title: 'temp',
            body: 'temp', 
            date: new Date()
        }
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('edit-note-wrapper');
        noteContainer.id = newNote.id;
        
        /* TEXT FIELDS */
        const inputFormsContainer = document.createElement('div');
        inputFormsContainer.classList.add('note-item-inputs');
      
        const noteTitle = document.createElement('div');
        noteTitle.textContent = newNote.title;
        noteTitle.classList.add('note-title-text');
        inputFormsContainer.appendChild(noteTitle);
      
        const noteBody = document.createElement('div');
        noteBody.textContent = newNote.body;
        noteBody.classList.add('note-body-text');
        inputFormsContainer.appendChild(noteBody);
      
        const creationDate = document.createElement('div');
        const dateOptions = { month: 'long', day: 'numeric' };
        const date = new Date(newNote.date);
        creationDate.textContent = date.toLocaleDateString('en-US', dateOptions);
        creationDate.classList.add('note-date-text');
        inputFormsContainer.appendChild(creationDate);
      
        /* ACTION BUTTONS */
        const deleteNoteButton = document.createElement('img');
        deleteNoteButton.src = '../images/delete.svg';
        deleteNoteButton.classList.add('action-button');
        deleteNoteButton.alt = 'Delete';
        deleteNoteButton.onclick = () => removeNoteFromDOM(newNote, notesContainer);
      
        const editNoteButton = document.createElement('img');
        editNoteButton.src = '../images/edit.svg';
        editNoteButton.classList.add('action-button');
        editNoteButton.alt = 'Edit';
        editNoteButton.onclick = () => editNote(newNote, notesContainer);
      
        noteContainer.appendChild(inputFormsContainer);
        noteContainer.appendChild(deleteNoteButton);
        noteContainer.appendChild(editNoteButton);
      
        this.shadowRoot.appendChild(noteContainer);

    }
}

