import { createNewNoteForm } from "../../dom-actions/create/createNewNoteForm.js";

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
    };

    static get observedAttributes() {
        return ['title', 'body', 'shouldrender'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'shouldrender') {
            this._shouldrender = newValue;
            this.render();
        }
    };

    onCancelClick() {
        this._shouldrender = false;
        this._title = '';
        this._body = '';
        this.render();
    };

    onTitleChange(text) {
        this.title = text;
    };

    onBodyChange(text) {
        this.body = text;
    };

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
    };

    render() {
        if (this._shouldrender){
            
            if (document.getElementById('addNoteForm')) {
                return;
            }
            
            const container = createNewNoteForm(this);
    
            this.appendChild(container);
        } else {
            document.getElementById('addNoteForm')?.remove();
        }
    };

    get title() {
        return this._title;
    };

    set title(title) {
        this._title = title;
    };

    get body() {
        return this._body;
    };

    set body(body) {
        this._body = body;
    };

    set shouldrender(shouldrender) {
        this._shouldrender = shouldrender;
        this.setAttribute('shouldrender', shouldrender);
    };
};
