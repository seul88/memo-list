import { editNote } from '../../dom-actions/edit/editNote.js';
import { removeNoteFromDOM } from '../../dom-actions/delete/removeNoteFromDOM.js';

export class EditNoteView extends HTMLElement {
    _id;
    _title;
    _body;
    _originalNote;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadStyles();
        this._title = '';
        this._body = '';
        this._id = null;
        this._originalNote = null;
        this.renderEditForm();
    }

    static get observedAttributes() {
        return ['title', 'body', 'id', 'originalnote'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.renderEditForm();
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
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

    get originalNote() {
        return this._originalNote;
    }

    set originalNote(originalNote) {
        this._originalNote = originalNote;
    }

    onCancelClick() {
        this.renderNote(this.originalNote);
    }

    onTitleChange(text) {
        this.title = text;
    }

    onBodyChange(text) {
        this.body = text;
    }

    onSaveClick() {
        const newNote = {
            id: this._id,
            title: this._title,
            body: this._body, 
            date: new Date()
        };

        const notesContainer = document.querySelector('notes-container');
        notesContainer.editNote(this._id, newNote);
        
        this.renderNote(newNote);
    };

    loadStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @import url('../css/edit-note.css');
            @import url('../css/note-item.css');

        `;
        this.shadowRoot.appendChild(style);
    }

    renderEditForm() {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();
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
        titleForm.onblur = (e) => this.onTitleChange(e.target.value);
        titleForm.placeholder = 'Note title';
        titleForm.defaultValue = this._title;
        titleForm.classList.add('edit-note-input-form');
        container.appendChild(titleForm);

        const bodyForm = document.createElement('textarea');
        bodyForm.rows = 7;
        bodyForm.onblur = (e) => this.onBodyChange(e.target.value);
        bodyForm.placeholder = 'Your note';
        bodyForm.defaultValue = this._body;
        bodyForm.classList.add('edit-note-input-form');
        container.appendChild(bodyForm);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('edit-note-save-button');
        saveButton.onclick = () => this.onSaveClick();
        container.appendChild(saveButton);

        this.shadowRoot.appendChild(container);
    }

    renderNote(note) {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();
       
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('edit-note-wrapper');
        noteContainer.id = note.id;

        /* TEXT FIELDS */
        const inputFormsContainer = document.createElement('div');
        inputFormsContainer.classList.add('note-item-inputs');
      
        const noteTitle = document.createElement('div');
        noteTitle.textContent = note.title;
        noteTitle.classList.add('note-title-text');
        inputFormsContainer.appendChild(noteTitle);
      
        const noteBody = document.createElement('div');
        noteBody.textContent = note.body;
        noteBody.classList.add('note-body-text');
        inputFormsContainer.appendChild(noteBody);
      
        const creationDate = document.createElement('div');
        const dateOptions = { month: 'long', day: 'numeric' };
        const date = new Date(note.date);
        creationDate.textContent = date.toLocaleDateString('en-US', dateOptions);
        creationDate.classList.add('note-date-text');
        inputFormsContainer.appendChild(creationDate);
      
        /* ACTION BUTTONS */
        const deleteNoteButton = document.createElement('img');
        deleteNoteButton.src = '../images/delete.svg';
        deleteNoteButton.classList.add('action-button');
        deleteNoteButton.alt = 'Delete';
        deleteNoteButton.onclick = () => removeNoteFromDOM(note);
      
        const editNoteButton = document.createElement('img');
        editNoteButton.src = '../images/edit.svg';
        editNoteButton.classList.add('action-button');
        editNoteButton.alt = 'Edit';
        editNoteButton.onclick = () => editNote(note);
      
        noteContainer.appendChild(inputFormsContainer);
        noteContainer.appendChild(deleteNoteButton);
        noteContainer.appendChild(editNoteButton);
      
        this.shadowRoot.appendChild(noteContainer);
        
        this._title = '';
        this._body = '';
    }
}

