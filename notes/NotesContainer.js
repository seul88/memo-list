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
    _filteredNotes;
    _filterPhrase; // TODO: store search phrase and react to it's change

    constructor() {
        super();
        this._notes = [];
        this._filteredNotes = [];
        this._filterPhrase = '';
        this.render();
    }

    static get observedAttributes() {
        return ['notes', 'filteredNotes', 'filterPhrase'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Update')
        if (name === 'notes') {
            console.log(newValue);
        } else if (name === 'filteredNotes') {

        } else if (name === 'filterPhrase') {

        }
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
        this.setAttribute('notes', JSON.stringify(notes));
        this.render();
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
        this.render();

        // temp solution
        // if (this.notes.length === 1) {
        //     this.filteredNotes.push({
        //         ...payload,
        //         id
        //     })
        // };
    };

    removeNote(id) {
        this.notes = this.notes.filter(item => item.id !== id);
        // this.filteredNotes = this.filteredNotes.filter(item => item.id !== id);
    };

    filterNotes(text) {
        this.filteredNotes = this.notes.
            filter(item => item.title.includes(text) || item.body.includes(text));
        console.log(this.filteredNotes);
        return this.filteredNotes;
    };

    getFilteredNotes() {
        return this.filteredNotes;
    };

    setFilteredNotes(notes) {
        this.filteredNotes = notes;
    };

    editNote(id, details) {
        const index = this.notes.findIndex(item => item.id === id);
        
        this.notes[index] = {
            ...this.notes[index],
            ...details
        };
    };

    render() {
        // this.innerHTML = `<h1>
        //     ${this._notes.map(item => `<div>
        //         ${item.title}  ${item.body}  ${item.date}
        //     </div>`).join('')}
        // </h1>`;
    }
};
