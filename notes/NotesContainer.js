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

    constructor() {
        this.notes = [];
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

    removeNote() {
        console.log(id);
        const newArray = this.notes.filter(item => item.id !== id);
        this.notes = newArray;
    };

    filterNotes(text) {
        return this.notes.
            filter(item => item.title === text || item.body === text);
    };

    editNote(id, details) {
        const index = this.notes.findIndex(item => item.id === id);
        this.notes[index] = {
            id,
            ...details
        };
    };
};
