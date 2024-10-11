import { createEditedNoteView } from "./createEditedNoteView.js";
import { createEditNoteForm } from "./createEditNoteForm.js";

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
    };

    static get observedAttributes() {
        return ['title', 'body', 'id', 'originalnote'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        this.renderEditForm();
    };

    onCancelClick() {
        this.renderNote(this.originalNote);
    };

    onTitleChange(text) {
        this.title = text;
    };

    onBodyChange(text) {
        this.body = text;
    };

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
    };

    renderEditForm() {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();
       
        const editForm = createEditNoteForm(this);

        this.shadowRoot.appendChild(editForm);
    };

    renderNote(note) {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();
       
        const noteContainer = createEditedNoteView(note);
      
        this.shadowRoot.appendChild(noteContainer);
        
        this._title = '';
        this._body = '';
    };

    get id() {
        return this._id;
    };

    set id(id) {
        this._id = id;
    };

    get title() {
        return this._title;
    };

    set title(title) {
        this._title = title;
    };

    get body() {
        return this._body;
    };

    set body(body) {
        this._body = body;
    };

    get originalNote() {
        return this._originalNote;
    };

    set originalNote(originalNote) {
        this._originalNote = originalNote;
    };
};
