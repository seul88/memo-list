class NoteDetails {
    title;
    body;
    date;
}

class Note extends NoteDetails {
    id;
}

export class MyComponent extends HTMLElement {

    constructor() {
        super();
        this._opisy = [{title: 'test', body: 'test1', date: 'dummy'}]
    }

    get opisy() {
        return this._opisy;
    }

    set opisy(opisy) {
        this._opisy = opisy;
        this.render();
    }

    static get observedAttributes() {
        return ['opisy'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._opisy = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    };
  
  
    render() {
        this.innerHTML = `<h1>
            ${this._opisy.map(item => `<div>
                ${item.title}  ${item.body}  ${item.date}
            </div>`).join('')}
        </h1>`;
    }
  }
  
export class NotesContainer {

    notes;
    filteredNotes;
    filterPhrase; // TODO: store search phrase and react to it's change

    constructor() {
        this.notes = [];
        this.filteredNotes = [];
    }

    getNotes() {
        return this.notes;
    };

    getNote(id) {
        return this.notes.filter(item => item.id === id);
    };

    addNote(payload) {
        const id = crypto.randomUUID();

        this.notes.push({
            ...payload,
            id
        });

        // temp solution
        if (this.notes.length === 1) {
            this.filteredNotes.push({
                ...payload,
                id
            })
        };
    };

    removeNote(id) {
        this.notes = this.notes.filter(item => item.id !== id);
        this.filteredNotes = this.filteredNotes.filter(item => item.id !== id);
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
};
