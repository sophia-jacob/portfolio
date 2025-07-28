document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownList = document.querySelector('.dropdown-list');

    dropdownToggle.addEventListener('click', function() {
        dropdownList.classList.toggle('show');
    });

    // Optional: Close the dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown-container')) {
            dropdownList.classList.remove('show');
        }
    });
});