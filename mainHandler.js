import { NotesContainer } from './notes/views/container/NotesContainer.js';
import { AddNoteView } from './notes/views/create/AddNoteView.js';
import { EditNoteView } from './notes/views/edit/EditNoteView.js'

export const mainHandler = () => {
  customElements.define('notes-container', NotesContainer);
  const notes = document.querySelector('notes-container');

  /* Setup mock data */
  notes.addNote({
    title: 'Test 1',
    body: 'Test value input',
    date: Date.now()
  });

  notes.addNote({
    title: 'Test 2',
    body: 'Much more text value input',
    date: Date.now()
  });

  notes.addNote({
    title: 'Test 3',
    body: 'Much more text value input x2 Much more text value input',
    date: Date.now()
  });

  notes.addNote({
    title: 'Test 4',
    body: 'Random poem about shopping list',
    date: Date.now()
  });

  const searchFormElement = document.getElementById('searchForm');
  const inputHandler = function(e) {
    notes.setSearchPhrase(e.target.value);
  };
  searchFormElement.addEventListener('input', inputHandler);

  const addNoteButton = document.getElementById('createNoteButton');
  customElements.define('add-note-view', AddNoteView);
  const addNoteView = document.querySelector('add-note-view');
  const addNote = () => {
    addNoteView.shouldrender = true;
  };
  addNoteButton.addEventListener('click', addNote);

  customElements.define('edit-note-view', EditNoteView);
};
