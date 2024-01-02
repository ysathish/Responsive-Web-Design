function openModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}

// Attach the function to the button click event
document.getElementById('openModalButton').addEventListener('click', openModal);