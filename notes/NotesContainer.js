class NoteDetails {
    title;
    body;
    date;
}

class Note extends NoteDetails {
    id;
}

export class NotesContainer {

    notes;
    filteredNotes;

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
