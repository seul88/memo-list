import { removeNoteFromDOM } from './removeNoteFromDOM.js';
import { editNote } from './editNote.js';

export const addNoteToDOM = (newNote, notesContainer) => {
  const container = document.getElementById('notesList');

  const noteContainer = document.createElement('div');
  noteContainer.classList.add('note-item');
  noteContainer.id = newNote.id;
  
  /* TEXT FIELDS */
  const inputFormsContainer = document.createElement('div');
  inputFormsContainer.classList.add('note-item-inputs');

  const noteTitle = document.createElement('div');
  noteTitle.textContent = newNote.title;
  noteTitle.classList.add('note-title-text');
  inputFormsContainer.appendChild(noteTitle);

  const noteBody = document.createElement('div');
  noteBody.textContent = newNote.body;
  noteBody.classList.add('note-body-text');
  inputFormsContainer.appendChild(noteBody);

  const creationDate = document.createElement('div');
  const dateOptions = { month: 'long', day: 'numeric' };
  const date = new Date(newNote.date);
  creationDate.textContent = date.toLocaleDateString('en-US', dateOptions);
  creationDate.classList.add('note-date-text');
  inputFormsContainer.appendChild(creationDate);

  /* ACTION BUTTONS */
  const deleteNoteButton = document.createElement('img');
  deleteNoteButton.src = '../images/delete.svg';
  deleteNoteButton.classList.add('action-button');
  deleteNoteButton.alt = 'Delete';
  deleteNoteButton.onclick = () => removeNoteFromDOM(newNote, notesContainer);

  const editNoteButton = document.createElement('img');
  editNoteButton.src = '../images/edit.svg';
  editNoteButton.classList.add('action-button');
  editNoteButton.alt = 'Edit';
  editNoteButton.onclick = () => editNote(newNote);

  noteContainer.appendChild(inputFormsContainer);
  noteContainer.appendChild(deleteNoteButton);
  noteContainer.appendChild(editNoteButton);

  container.appendChild(noteContainer);
};
