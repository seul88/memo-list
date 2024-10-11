import { addNoteToDOM } from '../../dom-actions/create/addNoteToDOM.js';
import { displayNoNotesMessage } from '../../dom-actions/no-notes/displayNoNotesMessage.js';
import { hideNoNotesMessage } from '../../dom-actions/no-notes/hideNoNotesMessage.js';
import { filterNotes } from '../../dom-actions/filter/filterNotes.js';

export class NotesContainer extends HTMLElement {
    _notes;
    _searchPhrase;

    constructor() {
        super();
        this._notes = [];
        this._searchPhrase = '';
    };

    static get observedAttributes() {
        return ['notes', 'searchphrase'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'notes') {
            if (JSON.parse(newValue).length  === 0) {
                displayNoNotesMessage();
            } else {
                hideNoNotesMessage();
            }
        } else if (name === 'searchphrase') {
            filterNotes(newValue, this);
        }
    };

    getNotes() {
        return this.notes;
    };

    getNote(id) {
        return this.notes.filter(item => item.id === id);
    };

    addNote(payload) {
        const id = crypto.randomUUID();
        const newNote = {
            ...payload,
            id
        }
        const newNotes = this._notes.push(newNote);

        this.setAttribute('notes', JSON.stringify(newNotes));
        
        addNoteToDOM(newNote, this);
    };

    removeNote(id) {
        this.notes = this.notes.filter(item => item.id !== id);
    };

    setSearchPhrase(searchPhrase) {
        this._searchPhrase = searchPhrase;
        this.setAttribute('searchphrase', searchPhrase);
    };

    editNote(id, details) {
        const index = this.notes.findIndex(item => item.id === id);
        
        this.notes[index] = {
            ...this.notes[index],
            ...details
        };
    };

    get notes() {
        return this._notes;
    };

    set notes(notes) {
        this._notes = notes;
        this.setAttribute('notes', JSON.stringify(notes));
    };

};
