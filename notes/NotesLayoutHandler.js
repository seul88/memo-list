export class NotesLayoutHandler {

    notesContainer;

    constructor(notesContainer){
        this.notesContainer = notesContainer;
    }

    renderItems() {

        if (this.notesContainer.notes.length === 0) {
         

        } else {
            const container = document.getElementById('notesList');
            const searchPhrase = this.notesContainer._searchPhrase;
            const notes = this.notesContainer._notes;

            const noteItems = (searchPhrase.length ?
                notes.filter(item => item.title.includes(searchPhrase) || item.body.includes(searchPhrase)) :
                    notes)
                .map(note => {
                  
                });
    
            noteItems.forEach(element => container.appendChild(element));
        }
    }
}
