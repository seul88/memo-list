class NoteDetails {
    title;
    body;
    date;
}

class Note extends NoteDetails {
    id;
}

export class NotesContainer extends HTMLElement {

    _notes;
    _searchPhrase;

    constructor() {
        super();
        this._notes = [];
        this._searchPhrase = '';
    }

    static get observedAttributes() {
        return ['notes', 'searchPhrase'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'notes') {

        } else if (name === 'searchPhrase') {

        }
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
        this.setAttribute('notes', JSON.stringify(notes));
    }

    getNotes() {
        return this.notes;
    };

    getNote(id) {
        return this.notes.filter(item => item.id === id);
    };

    addNote(payload) {
        const id = crypto.randomUUID();
        const newNotes = this._notes.push({
            ...payload,
            id
        });

        this.setAttribute('notes', JSON.stringify(newNotes));
    };

    removeNote(id) {
        this.notes = this.notes.filter(item => item.id !== id);
    };

    setSearchPhrase(searchPhrase) {
        this._searchPhrase = searchPhrase;
        this.setAttribute('searchPhrase', searchPhrase);
    }

    editNote(id, details) {
        const index = this.notes.findIndex(item => item.id === id);
        
        this.notes[index] = {
            ...this.notes[index],
            ...details
        };
    };

};
