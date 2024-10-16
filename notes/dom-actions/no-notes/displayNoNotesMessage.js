export const displayNoNotesMessage = () => {
    const noNotesDiv = document.getElementById('no-notes-message');

    const container = document.createElement('div');
    container.classList.add('no-notes-message');

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

    const addNoteView = document.querySelector('add-note-view');

    const addNote = () => {
        addNoteView.shouldrender = true;
    };

    addNoteButton.addEventListener('click', addNote);

    container.appendChild(noNotesIcon);
    container.appendChild(noNotesTextContainer);
    container.appendChild(addNoteButton);
    noNotesDiv.appendChild(container);
};