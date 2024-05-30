'use strict'; // Enforces strict mode for more secure JavaScript code and catching common coding errors

// Select the modal element
const modal = document.querySelector('.modal');
// Select the overlay element
const overlay = document.querySelector('.overlay');
// Select the button to close the modal
const btnCloseModal = document.querySelector('.close-modal');
// Select all buttons that will open the modal
const btnOpenModal = document.querySelectorAll('.show-modal');

// Function to close the modal and hide the overlay
const closeModal = function () {
  modal.classList.add('hidden'); // Add 'hidden' class to modal to hide it
  overlay.classList.add('hidden'); // Add 'hidden' class to overlay to hide it
};

// Function to open the modal and show the overlay
const openModal = function () {
  modal.classList.remove('hidden'); // Remove 'hidden' class from modal to show it
  overlay.classList.remove('hidden'); // Remove 'hidden' class from overlay to show it
};

// Loop through all buttons that open the modal and add click event listener to each
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal); // When a button is clicked, call openModal function
}

// Add click event listener to the close button to close the modal
btnCloseModal.addEventListener('click', closeModal); // When the close button is clicked, call closeModal function

// Add click event listener to the overlay to close the modal when clicking outside the modal
overlay.addEventListener('click', closeModal); // When the overlay is clicked, call closeModal function

// Add keydown event listener to the document to close the modal when 'Escape' key is pressed
document.addEventListener('keydown', function (e) {
  // Check if the 'Escape' key was pressed and the modal is currently not hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Call closeModal function to close the modal
  }
});
