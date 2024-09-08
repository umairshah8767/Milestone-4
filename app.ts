document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate resume
    const resumeHtml = `
        <h1 contenteditable="true">${name}</h1>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <div class="resume-section" id="education-section">
            <h2 contenteditable="true">Education</h2>
            <p class="editable" contenteditable="true">${education}</p>
        </div>
        <div class="resume-section" id="experience-section">
            <h2 contenteditable="true">Work Experience</h2>
            <p class="editable" contenteditable="true">${experience}</p>
        </div>
        <div class="resume-section" id="skills-section">
            <h2 contenteditable="true">Skills</h2>
            <p class="editable" contenteditable="true">${skills}</p>
        </div>
    `;

    // Display resume
    (document.getElementById('resume-output') as HTMLDivElement).innerHTML = resumeHtml;

    // Add event listeners for editable sections
    addEditableListeners();
});

function addEditableListenerss() {
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.add('editable');
        });
        element.addEventListener('blur', () => {
            element.classList.remove('editable');
        });
    });
}