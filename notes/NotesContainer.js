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

    removeNote(id) {
        console.log(id);
        const newArray = this.notes.filter(item => item.id !== id);
        this.notes = newArray;
    };

    filterNotes(text) {
        return this.notes.
            filter(item => item.title.includes(text) || item.body.includes(text));
    };

    editNote(id, details) {
        const index = this.notes.findIndex(item => item.id === id);
        
        this.notes[index] = {
            ...this.notes[index],
            ...details
        };
    };

    // renderItems() {
    //     const container = document.getElementById('notesList');

    //     const noteItems = this.notes.map(note => {
    //         const noteContainer = document.createElement('div');
    //         noteContainer.classList.add('note-item');

    //         /* INPUT FORMS */
    //         const inputFormsContainer = document.createElement('div');
    //         inputFormsContainer.classList.add('note-item-inputs');

    //         const noteTitle = document.createElement('div');
    //         noteTitle.textContent = note.title;
    //         inputFormsContainer.appendChild(noteTitle);

    //         const noteBody = document.createElement('div');
    //         noteBody.textContent = note.body;
    //         inputFormsContainer.appendChild(noteBody);

    //         const creationDate = document.createElement('div');
    //         creationDate.textContent = note.date;
    //         inputFormsContainer.appendChild(creationDate);

    //         /* ACTION BUTTONS */
    //         const deleteNoteButton = document.createElement('div');
    //         deleteNoteButton.textContent = 'delete';

    //         const editNoteButton = document.createElement('div');
    //         editNoteButton.textContent = 'edit';

    //         noteContainer.appendChild(inputFormsContainer);
    //         noteContainer.appendChild(editNoteButton);
    //         noteContainer.appendChild(deleteNoteButton);

    //         return noteContainer;
    //     });

    //     noteItems.forEach(element => container.appendChild(element));
    // }
};
