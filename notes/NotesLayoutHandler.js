export class NotesLayoutHandler {

    notesContainer;

    constructor(notesContainer){
        this.notesContainer = notesContainer;
    }

    renderItems() {
        const container = document.getElementById('notesList');

        const noteItems = this.notesContainer.notes.map(note => {
            const noteContainer = document.createElement('div');
            noteContainer.classList.add('note-item');

            /* INPUT FORMS */
            const inputFormsContainer = document.createElement('div');
            inputFormsContainer.classList.add('note-item-inputs');

            const noteTitle = document.createElement('div');
            noteTitle.textContent = note.title;
            inputFormsContainer.appendChild(noteTitle);

            const noteBody = document.createElement('div');
            noteBody.textContent = note.body;
            inputFormsContainer.appendChild(noteBody);

            const creationDate = document.createElement('div');
            creationDate.textContent = note.date;
            inputFormsContainer.appendChild(creationDate);

            /* ACTION BUTTONS */
            const deleteNoteButton = document.createElement('div');
            deleteNoteButton.textContent = 'delete';

            const editNoteButton = document.createElement('div');
            editNoteButton.textContent = 'edit';

            noteContainer.appendChild(inputFormsContainer);
            noteContainer.appendChild(editNoteButton);
            noteContainer.appendChild(deleteNoteButton);

            return noteContainer;
        });

        noteItems.forEach(element => container.appendChild(element));
    }


}
