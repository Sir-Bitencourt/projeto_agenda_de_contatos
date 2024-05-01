document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const tableBody = document.querySelector('#contact-table tbody');
    let contacts = [];
    form.addEventListener('submit', function(event) {
    event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || phone === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        contacts.push({ name, phone });
        contacts.sort((a, b) => a.name.localeCompare(b.name));
        nameInput.value = '';
        phoneInput.value = '';
        renderContacts();
    });

    function renderContacts() {
        tableBody.innerHTML = '';
        contacts.forEach(contact => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
            `;
            tableBody.appendChild(newRow);
        });
    }
});