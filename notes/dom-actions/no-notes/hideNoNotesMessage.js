export const hideNoNotesMessage = () => {
    const container = document.getElementById('no-notes-message');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};