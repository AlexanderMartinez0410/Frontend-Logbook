// Form and ticket sections
const formSection = document.getElementById('form-section');
const ticketSection = document.getElementById('ticket-section');

// Form elements
const ticketForm = document.getElementById('ticket-form');
const avatarInput = document.getElementById('avatar-input');
const uploadArea = document.getElementById('upload-area');
const uploadIcon = document.getElementById('upload-icon');
const uploadText = document.getElementById('upload-text');
const avatarPreview = document.getElementById('avatar-preview');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const githubUsernameInput = document.getElementById('github-username');

// Error message elements
const avatarError = document.getElementById('avatar-error');
const fullNameError = document.getElementById('full-name-error');
const emailError = document.getElementById('email-error');
const githubError = document.getElementById('github-error');

// Ticket elements
const ticketName = document.getElementById('ticket-name');
const ticketEmail = document.getElementById('ticket-email');
const ticketAvatar = document.getElementById('ticket-avatar');
const ticketDisplayName = document.getElementById('ticket-display-name');
const ticketGithubUsername = document.getElementById('ticket-github-username');
const ticketNumber = document.getElementById('ticket-number');

// Store uploaded file
let uploadedFile = null;
let uploadedFileURL = null;

// Avatar upload handling
avatarInput.addEventListener('change', handleAvatarUpload);

// Drag and drop
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    avatarInput.files = files;
    handleAvatarUpload({ target: avatarInput });
  }
});

function handleAvatarUpload(e) {
  const file = e.target.files[0];
  
  if (!file) {
    clearError(avatarError);
    return;
  }
  
  // Validate file type
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!validTypes.includes(file.type)) {
    showError(avatarError, 'Please upload a JPG or PNG image.');
    resetAvatarUpload();
    return;
  }
  
  // Validate file size (500KB = 512000 bytes)
  const maxSize = 500 * 1024; // 500KB in bytes
  if (file.size > maxSize) {
    showError(avatarError, 'File size must be less than 500KB.');
    resetAvatarUpload();
    return;
  }
  
  // File is valid
  clearError(avatarError);
  uploadedFile = file;
  
  // Show preview
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedFileURL = e.target.result;
    avatarPreview.src = uploadedFileURL;
    avatarPreview.style.display = 'block';
    uploadIcon.style.display = 'none';
    uploadText.textContent = 'Change photo';
    uploadArea.classList.add('has-file');
  };
  reader.readAsDataURL(file);
}

function resetAvatarUpload() {
  avatarInput.value = '';
  uploadedFile = null;
  uploadedFileURL = null;
  avatarPreview.style.display = 'none';
  uploadIcon.style.display = 'block';
  uploadText.textContent = 'Drag and drop or click to upload';
  uploadArea.classList.remove('has-file');
}

// Form validation
function validateForm() {
  let isValid = true;
  
  // Validate avatar
  if (!uploadedFile) {
    showError(avatarError, 'Please upload your avatar.');
    isValid = false;
  } else {
    clearError(avatarError);
  }
  
  // Validate full name
  const fullName = fullNameInput.value.trim();
  if (!fullName) {
    showError(fullNameError, 'Full name is required.');
    fullNameInput.classList.add('error');
    isValid = false;
  } else {
    clearError(fullNameError);
    fullNameInput.classList.remove('error');
  }
  
  // Validate email
  const email = emailInput.value.trim();
  if (!email) {
    showError(emailError, 'Email address is required.');
    emailInput.classList.add('error');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(emailError, 'Please enter a valid email address.');
    emailInput.classList.add('error');
    isValid = false;
  } else {
    clearError(emailError);
    emailInput.classList.remove('error');
  }
  
  // Validate GitHub username
  const githubUsername = githubUsernameInput.value.trim();
  if (!githubUsername) {
    showError(githubError, 'GitHub username is required.');
    githubUsernameInput.classList.add('error');
    isValid = false;
  } else {
    clearError(githubError);
    githubUsernameInput.classList.remove('error');
  }
  
  return isValid;
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(element, message) {
  element.textContent = message;
  element.style.display = 'block';
}

function clearError(element) {
  element.textContent = '';
  element.style.display = 'none';
}

// Real-time validation
fullNameInput.addEventListener('blur', () => {
  const fullName = fullNameInput.value.trim();
  if (!fullName) {
    showError(fullNameError, 'Full name is required.');
    fullNameInput.classList.add('error');
  } else {
    clearError(fullNameError);
    fullNameInput.classList.remove('error');
  }
});

emailInput.addEventListener('blur', () => {
  const email = emailInput.value.trim();
  if (!email) {
    showError(emailError, 'Email address is required.');
    emailInput.classList.add('error');
  } else if (!isValidEmail(email)) {
    showError(emailError, 'Please enter a valid email address.');
    emailInput.classList.add('error');
  } else {
    clearError(emailError);
    emailInput.classList.remove('error');
  }
});

githubUsernameInput.addEventListener('blur', () => {
  const githubUsername = githubUsernameInput.value.trim();
  if (!githubUsername) {
    showError(githubError, 'GitHub username is required.');
    githubUsernameInput.classList.add('error');
  } else {
    clearError(githubError);
    githubUsernameInput.classList.remove('error');
  }
});

// Clear error on input
fullNameInput.addEventListener('input', () => {
  if (fullNameInput.value.trim()) {
    clearError(fullNameError);
    fullNameInput.classList.remove('error');
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() && isValidEmail(emailInput.value.trim())) {
    clearError(emailError);
    emailInput.classList.remove('error');
  }
});

githubUsernameInput.addEventListener('input', () => {
  if (githubUsernameInput.value.trim()) {
    clearError(githubError);
    githubUsernameInput.classList.remove('error');
  }
});

// Form submission
ticketForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    generateTicket();
  }
});

function generateTicket() {
  // Get form values
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  let githubUsername = githubUsernameInput.value.trim();
  
  // Add @ if not present
  if (githubUsername && !githubUsername.startsWith('@')) {
    githubUsername = '@' + githubUsername;
  }
  
  // Generate random ticket number
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  
  // Populate ticket
  ticketName.textContent = fullName;
  ticketEmail.textContent = email;
  ticketAvatar.src = uploadedFileURL;
  ticketAvatar.alt = `${fullName}'s avatar`;
  ticketDisplayName.textContent = fullName;
  ticketGithubUsername.textContent = githubUsername;
  ticketNumber.textContent = `#${randomNumber}`;
  
  // Show ticket section, hide form
  formSection.style.display = 'none';
  ticketSection.style.display = 'block';
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Announce to screen readers
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = `Success! Your conference ticket has been generated for ${fullName}.`;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    announcement.remove();
  }, 3000);
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Allow form submission with Enter key when focused on inputs
  if (e.key === 'Enter' && e.target.matches('.form-input')) {
    if (e.target === githubUsernameInput) {
      ticketForm.dispatchEvent(new Event('submit'));
    }
  }
});
