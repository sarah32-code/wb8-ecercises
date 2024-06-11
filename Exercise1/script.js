window.onload = function () {
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const content = document.getElementById('content');
    const form = document.getElementById('userForm');

    function handleFormSubmit(event) {
        event.preventDefault();
        const enteredName = document.getElementById('name').value;
        const studentRadio = document.getElementById('student');
        const instructorRadio = document.getElementById('instructor');

        let enteredRole = '';
        if (studentRadio.checked) {
            enteredRole = studentRadio.value;
        } else if (instructorRadio.checked) {
            enteredRole = instructorRadio.value;
        }

        if (enteredRole) {
            localStorage.setItem('name', enteredName);
            localStorage.setItem('role', enteredRole);
            location.href = "information.html";
        } else {
            alert('Please select a role.');
        }
    }

    function displayUserInfo() {
        if (role === 'instructor') {
            welcomeMessage.innerHTML = `Welcome Instructor ${name}`;
            content.innerHTML = '<p class="instructor-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>';
        } else if (role === 'student') {
            welcomeMessage.innerHTML = `Welcome Student ${name}`;
            content.innerHTML = '<p class="student-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>';
        }
    }

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    if (location.pathname.endsWith('information.html')) {
        displayUserInfo();
    }
};
