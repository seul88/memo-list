export const displayNoNotesMessage = (notesContainer) => {
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

    noNotesTextContainer.appendChild(noNotesMessage);
    noNotesTextContainer.appendChild(noNotesInfo);

    const addNoteButton = document.createElement('button');
    addNoteButton.classList.add('add-note-button');

    addNoteButton.innerHTML = `<div class="button-items">
        <img 
            src='../images/note_add.svg' 
            alt='Add note'
        >
        <div>Add Note</div>
    </div>`;

    addNoteButton.onclick = () => notesContainer.addNote({
        title: 'Mock value',
        body: 'Mock value',
        date: Date.now()
    });

    container.appendChild(noNotesIcon);
    container.appendChild(noNotesTextContainer);
    container.appendChild(addNoteButton);
};