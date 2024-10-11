export const createModal = (note) => {

    const onClose = (dialog) => {
        document.querySelector('.dialog-overlay').style.display = 'none';
        dialog.close();
        document.getElementById(`delete-dialog-${note.id}`).remove();
    };

    const overlay = document.createElement('div');
    overlay.classList.add('dialog-overlay');
    document.body.appendChild(overlay);
    document.querySelector('.dialog-overlay').style.display = 'block';

    const dialog = document.createElement('dialog');
    dialog.id = `delete-dialog-${note.id}`;

    return { dialog, onClose };
};
