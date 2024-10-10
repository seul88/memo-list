export class AddNoteView extends HTMLElement {

    _title;
    _body;
    _date;
    _shouldrender;

    constructor() {
        super();
        this._title = '';
        this._date = new Date();
        this._body = '';
        this._shouldrender = false;
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'body', 'shouldrender'];
    }

    set shouldrender(shouldrender) {
        console.log('setting')
        this._shouldrender = shouldrender;
        this.setAttribute('shouldrender', shouldrender);
    } 

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('UPDATE')
        if (name === 'shouldrender') {
            this._shouldrender = newValue;
            this.render();
        }
    }

    onCancelClick() {
        console.log('Cancel')
        this._shouldrender = false;
        this.render();
    }

    onTitleChange(text) {
        console.log(text);
    }

    onBodyChange(text) {
        console.log(text);
    }

    onSaveClick() {
        console.log('Save')
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