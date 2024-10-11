import { editNote } from '../../dom-actions/edit/editNote.js';
import { removeNoteFromDOM } from '../../dom-actions/delete/removeNoteFromDOM.js';

export const createEditedNoteView = (note) => {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('edit-note-wrapper');
    noteContainer.id = note.id;

    /* TEXT FIELDS */
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
    const dateOptions = { month: 'long', day: 'numeric' };
    const date = new Date(note.date);
    creationDate.textContent = date.toLocaleDateString('en-US', dateOptions);
    creationDate.classList.add('note-date-text');
    inputFormsContainer.appendChild(creationDate);
  
    /* ACTION BUTTONS */
    const deleteNoteButton = document.createElement('img');
    deleteNoteButton.src = '../images/delete.svg';
    deleteNoteButton.classList.add('action-button');
    deleteNoteButton.alt = 'Delete';
    deleteNoteButton.onclick = () => removeNoteFromDOM(note);
  
    const editNoteButton = document.createElement('img');
    editNoteButton.src = '../images/edit.svg';
    editNoteButton.classList.add('action-button');
    editNoteButton.alt = 'Edit';
    editNoteButton.onclick = () => editNote(note);
  
    noteContainer.appendChild(inputFormsContainer);
    noteContainer.appendChild(deleteNoteButton);
    noteContainer.appendChild(editNoteButton);

    return noteContainer;
};
