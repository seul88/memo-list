import { createDeleteForm } from "./createDeleteForm.js";
import { createModal } from "./createModal.js";

export const removeNoteFromDOM = (note) => {

    const { dialog, onClose } = createModal(note);

    const container = document.getElementById('notesContainer');
    container.appendChild(dialog);
    dialog.showModal();

    const deleteNoteWrapper = createDeleteForm(onClose, note);
    dialog.appendChild(deleteNoteWrapper);
};