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
            const deleteNoteButton = document.createElement('img');
            deleteNoteButton.src = '../images/delete.svg';
            deleteNoteButton.classList.add('action-button');
            deleteNoteButton.alt = 'Delete';
            
            deleteNoteButton.onclick = () => {
                this.notesContainer.removeNote(note.id);
                const parentElement = document.getElementById("notesList");
                while (parentElement.firstChild) {
                    parentElement.removeChild(parentElement.firstChild);
                }
                this.renderItems();
            };

            const editNoteButton = document.createElement('img');
            editNoteButton.src = '../images/edit.svg';
            editNoteButton.classList.add('action-button');
            editNoteButton.alt = 'Edit';

            noteContainer.appendChild(inputFormsContainer);
            noteContainer.appendChild(deleteNoteButton);
            noteContainer.appendChild(editNoteButton);

            return noteContainer;
        });

        noteItems.forEach(element => container.appendChild(element));
    }


}
