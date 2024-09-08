document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume
    var resumeHtml = "\n        <h1 contenteditable=\"true\">".concat(name, "</h1>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <div class=\"resume-section\" id=\"education-section\">\n            <h2 contenteditable=\"true\">Education</h2>\n            <p class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n        </div>\n        <div class=\"resume-section\" id=\"experience-section\">\n            <h2 contenteditable=\"true\">Work Experience</h2>\n            <p class=\"editable\" contenteditable=\"true\">").concat(experience, "</p>\n        </div>\n        <div class=\"resume-section\" id=\"skills-section\">\n            <h2 contenteditable=\"true\">Skills</h2>\n            <p class=\"editable\" contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n    ");
    // Display resume
    document.getElementById('resume-output').innerHTML = resumeHtml;
    // Add event listeners for editable sections
    addEditableListeners();
});
function addEditableListeners() {
    var editableElements = document.querySelectorAll('[contenteditable]');
    editableElements.forEach(function (element) {
        element.addEventListener('focus', function () {
            element.classList.add('editable');
        });
        element.addEventListener('blur', function () {
            element.classList.remove('editable');
        });
    });
}
