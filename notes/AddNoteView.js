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
        })

        this._shouldrender = false;
        this.render();
    }

    render() {
        if (this._shouldrender){
            
            if (document.getElementById('addNoteForm')) {
                return;
            }
            
            const container = document.createElement('div');
            container.id = 'addNoteForm'

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.onclick = () => this.onCancelClick();
            container.appendChild(cancelButton);
    
            const titleForm = document.createElement('input');
            titleForm.oninput = (e) => this.onTitleChange(e.target.value);
            container.appendChild(titleForm);
    
            const bodyForm = document.createElement('input');
            bodyForm.oninput = (e) => this.onBodyChange(e.target.value);
            container.appendChild(bodyForm);
    
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.onclick = () => this.onSaveClick();
            container.appendChild(saveButton);
    
            this.appendChild(container);
        } else {
            document.getElementById('addNoteForm')?.remove()
        }
    }
};