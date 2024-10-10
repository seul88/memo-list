export class AddNoteView extends HTMLElement {

    _title;
    _body;
    _shouldrender;

    constructor() {
        super();
        this._title = '';
        this._body = '';
        this._shouldrender = false;
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'body', 'shouldrender'];
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get body() {
        return this._body;
    }

    set body(body) {
        this._body = body;
    }

    set shouldrender(shouldrender) {
        this._shouldrender = shouldrender;
        this.setAttribute('shouldrender', shouldrender);
    } 

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'shouldrender') {
            this._shouldrender = newValue;
            this.render();
        }
    }

    onCancelClick() {
        this._shouldrender = false;
        this._title = '';
        this._body = '';
        this.render();
    }

    onTitleChange(text) {
        this.title = text;
    }

    onBodyChange(text) {
        this.body = text;
    }

    onSaveClick() {
        const notes = document.querySelector('notes-container');
        notes.addNote({
            title: this.title,
            body: this.body, 
            date: Date.now()
        });

        this._shouldrender = false;
        this._title = '';
        this._body = '';
        this.render();
    }

    render() {
        if (this._shouldrender){
            
            if (document.getElementById('addNoteForm')) {
                return;
            }
            
            const container = document.createElement('div');
            container.id = 'addNoteForm';

            const headerRow = document.createElement('div');
            headerRow.classList.add('add-note-title-row');

            const headerText = document.createElement('div');
            headerText.textContent = 'Add new note';
            headerText.classList.add('add-note-header-text');
            headerRow.appendChild(headerText);

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.onclick = () => this.onCancelClick();
            cancelButton.classList.add('add-note-cancel-button');
            headerRow.appendChild(cancelButton);

            container.appendChild(headerRow);
    
            const titleForm = document.createElement('input');
            titleForm.oninput = (e) => this.onTitleChange(e.target.value);
            titleForm.placeholder = 'Note title';
            titleForm.classList.add('and-note-input-form');
            container.appendChild(titleForm);
    
            const bodyForm = document.createElement('textarea');
            bodyForm.rows = 7;
            bodyForm.oninput = (e) => this.onBodyChange(e.target.value);
            bodyForm.placeholder = 'Your note';
            bodyForm.classList.add('and-note-input-form');
            container.appendChild(bodyForm);
    
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('add-note-save-button');
            saveButton.onclick = () => this.onSaveClick();
            container.appendChild(saveButton);
    
            this.appendChild(container);
        } else {
            document.getElementById('addNoteForm')?.remove()
        }
    }
};