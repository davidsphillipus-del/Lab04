// Global variables
let studentProfiles = [];
let profileIdCounter = 1;

// DOM elements
const form = document.getElementById('regForm');
const cardsContainer = document.getElementById('cards');
const tableBody = document.querySelector('#summary tbody');
const liveRegion = document.getElementById('live');

// Validation functions
function validateRequired(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`err-${fieldId}`);
    const value = field.value.trim();
    
    if (!value) {
        errorElement.textContent = `${fieldName} is required.`;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('err-email');
    
    if (!value.trim()) {
        errorElement.textContent = 'Email is required.';
        return false;
    } else if (!emailRegex.test(value)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateYear() {
    const yearRadios = document.querySelectorAll('input[name="year"]');
    const errorElement = document.getElementById('err-year');
    const isSelected = Array.from(yearRadios).some(radio => radio.checked);
    
    if (!isSelected) {
        errorElement.textContent = 'Please select your year of study.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateForm() {
    const firstName = validateRequired('firstName', 'First Name');
    const lastName = validateRequired('lastName', 'Last Name');
    const email = validateEmail(document.getElementById('email').value);
    const programme = validateRequired('programme', 'Programme');
    const year = validateYear();
    
    return firstName && lastName && email && programme && year;
}

// Create profile card
function createProfileCard(data) {
    const card = document.createElement('div');
    card.className = 'card-person';
    card.dataset.profileId = data.id;
    
    const photoUrl = data.photoUrl || 'https://placehold.co/128x128/003366/FFFFFF?text=Student';
    
    card.innerHTML = `
        <img src="${photoUrl}" alt="Profile photo of ${data.firstName} ${data.lastName}" onerror="this.src='https://placehold.co/128x128/003366/FFFFFF?text=Student'">
        <div>
            <h3>${data.firstName} ${data.lastName}</h3>
            <p>
                <span class="badge">${data.programme}</span>
                <span class="badge">Year ${data.year}</span>
            </p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.interests ? `<p><strong>Interests:</strong> ${data.interests}</p>` : ''}
            <button type="button" class="btn-remove" onclick="removeProfile(${data.id})">Remove</button>
        </div>
    `;
    
    return card;
}

// Create table row
function createTableRow(data) {
    const row = document.createElement('tr');
    row.dataset.profileId = data.id;
    
    row.innerHTML = `
        <td>${data.firstName} ${data.lastName}</td>
        <td>${data.programme}</td>
        <td>${data.year}</td>
        <td>${data.email}</td>
        <td><button type="button" class="btn-remove" onclick="removeProfile(${data.id})">Remove</button></td>
    `;
    
    return row;
}

// Add new profile
function addProfile(formData) {
    const profileData = {
        id: profileIdCounter++,
        firstName: formData.get('firstName').trim(),
        lastName: formData.get('lastName').trim(),
        email: formData.get('email').trim(),
        programme: formData.get('programme'),
        year: formData.get('year'),
        interests: formData.get('interests').trim(),
        photoUrl: formData.get('photoUrl').trim()
    };
    
    // Add to profiles array
    studentProfiles.push(profileData);
    
    // Create and add card
    const card = createProfileCard(profileData);
    cardsContainer.prepend(card);
    
    // Create and add table row
    const row = createTableRow(profileData);
    tableBody.prepend(row);
    
    // Update live region for accessibility
    liveRegion.textContent = `Profile for ${profileData.firstName} ${profileData.lastName} has been added successfully.`;
    
    // Reset form
    form.reset();
    
    // Clear any existing error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
}

// Remove profile
function removeProfile(profileId) {
    // Remove from array
    studentProfiles = studentProfiles.filter(profile => profile.id !== profileId);
    
    // Remove card
    const card = document.querySelector(`[data-profile-id="${profileId}"]`);
    if (card) {
        const profileName = card.querySelector('h3').textContent;
        card.remove();
        
        // Remove table row
        const row = tableBody.querySelector(`[data-profile-id="${profileId}"]`);
        if (row) {
            row.remove();
        }
        
        // Update live region for accessibility
        liveRegion.textContent = `Profile for ${profileName} has been removed.`;
    }
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const formData = new FormData(form);
        addProfile(formData);
    } else {
        liveRegion.textContent = 'Please fix the errors in the form before submitting.';
    }
});

// Real-time validation
document.getElementById('firstName').addEventListener('blur', () => {
    validateRequired('firstName', 'First Name');
});

document.getElementById('lastName').addEventListener('blur', () => {
    validateRequired('lastName', 'Last Name');
});

document.getElementById('email').addEventListener('blur', (e) => {
    validateEmail(e.target.value);
});

document.getElementById('programme').addEventListener('change', () => {
    validateRequired('programme', 'Programme');
});

document.querySelectorAll('input[name="year"]').forEach(radio => {
    radio.addEventListener('change', validateYear);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('NUST Student Registration System loaded successfully');
});
