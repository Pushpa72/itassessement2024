document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const service = document.getElementById('service');
    const message = document.getElementById('message');

    if (!firstName.value.trim()) {
        isValid = false;
        firstName.style.borderColor = 'red';
    } else {
        firstName.style.borderColor = '';
    }

    if (!lastName.value.trim()) {
        isValid = false;
        lastName.style.borderColor = 'red';
    } else {
        lastName.style.borderColor = '';
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        isValid = false;
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = '';
    }

    if (!phone.value.trim() || !validatePhone(phone.value)) {
        isValid = false;
        phone.style.borderColor = 'red';
    } else {
        phone.style.borderColor = '';
    }

    if (!service.value.trim()) {
        isValid = false;
        service.style.borderColor = 'red';
    } else {
        service.style.borderColor = '';
    }

    if (!message.value.trim()) {
        isValid = false;
        message.style.borderColor = 'red';
    } else {
        message.style.borderColor = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, you can submit the form here
        // this.submit();
    } else {
        alert('Please fill out all required fields correctly.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9\-\+]{9,15}$/;
    return re.test(String(phone).toLowerCase());
}
