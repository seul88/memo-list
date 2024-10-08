interface NoteDetails {
    title: string;
    body: string;
    date: Date;
}

interface Note extends NoteDetails {
    id: string;
}

export class notesContainer {

    notes: Note[];

    constructor() {
        this.notes = [];
    }

    getNote(id: string) {
        return this.notes.filter(item => item.id === id);
    };

    addNote(payload: NoteDetails) {
        const id = crypto.randomUUID();
        this.notes.push({
            ...payload,
            id
        });
    };

    removeNote(id: string) {
        console.log(id);
        const newArray = this.notes.filter(item => item.id !== id);
        this.notes = newArray;
    };

    findNotes(text: string) {
        return this.notes.
            filter(item => item.title === text || item.body === text);
    };

    editNote(id, details: NoteDetails) {
        const index = this.notes.findIndex(item => item.id === id);
        this.notes[index] = {
            id,
            ...details
        };
    };
};
