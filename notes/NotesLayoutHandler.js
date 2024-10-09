export class NotesLayoutHandler {

    notesContainer;

    constructor(notesContainer){
        this.notesContainer = notesContainer;
    }

    renderItems() {
        /* Clear displayed nodes before rerender */
        const parentElement = document.getElementById("notesList");
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }

        const parentElement2 = document.getElementById('no-notes-message');
        while (parentElement2.firstChild) {
            parentElement2.removeChild(parentElement2.firstChild);
        }

        if (this.notesContainer.notes.length === 0) {
            const container = document.getElementById('no-notes-message');

            const noNotesIcon = document.createElement('img');
            noNotesIcon.src = '../images/info.svg';
            noNotesIcon.classList.add('info-image')

            const noNotesTextContainer = document.createElement('div');
            noNotesTextContainer.classList.add('no-notes-text-container');

            const noNotesMessage = document.createElement('div');
            noNotesMessage.innerText = 'No notes yet';
            noNotesMessage.classList.add('no-notes-header');

            const noNotesInfo = document.createElement('div');
            noNotesInfo.innerText = 'Add a note to keep track of your learnings.';
            noNotesInfo.classList.add('no-notes-info');

            noNotesTextContainer.appendChild(noNotesMessage)
            noNotesTextContainer.appendChild(noNotesInfo)

            // Add note (button)
            const addNoteButton = document.createElement('button');
            addNoteButton.classList.add('add-note-button');

            addNoteButton.innerHTML = `<div class="button-items">
                <img 
                    src='../images/note_add.svg' 
                    alt='Add note'
                >
                <div>Add Note</div>
            </div>`;
            addNoteButton.onclick = () => {
                this.notesContainer.addNote({
                    title: 'Mock',
                    body: 'Mock',
                    date: Date.now()
                })
                this.renderItems();
            };

            container.appendChild(noNotesIcon);
            container.appendChild(noNotesTextContainer);
            container.appendChild(addNoteButton);

        } else {
            const container = document.getElementById('notesList');
            console.log(this.notesContainer._searchPhrase)
            const searchPhrase = this.notesContainer._searchPhrase;
            const notes = this.notesContainer._notes;

            const noteItems = (searchPhrase.length ?
                notes.filter(item => item.title.includes(searchPhrase) || item.body.includes(searchPhrase)) :
                    notes)
                .map(note => {
                    const noteContainer = document.createElement('div');
                    noteContainer.classList.add('note-item');
        
                    /* INPUT FORMS */
                    const inputFormsContainer = document.createElement('div');
                    inputFormsContainer.classList.add('note-item-inputs');
        
                    const noteTitle = document.createElement('div');
                    noteTitle.textContent = note.title;
                    noteTitle.classList.add('note-title-text');
                    inputFormsContainer.appendChild(noteTitle);
        
                    const noteBody = document.createElement('div');
                    noteBody.textContent = note.body;
                    noteBody.classList.add('note-body-text');
                    inputFormsContainer.appendChild(noteBody);
        
                    const creationDate = document.createElement('div');
                    creationDate.textContent = note.date;
                    creationDate.classList.add('note-date-text');
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
}
