var _a;
// Handle form input and update resume
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a;
    // Profile Picture
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePicture = (_a = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgElement = document.getElementById('display-profile-picture');
            if (imgElement) {
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            }
        };
        reader.readAsDataURL(profilePicture);
    }
    // Personal Details
    var nameInput = document.getElementById('name');
    var professionInput = document.getElementById('profession');
    var aboutInput = document.getElementById('about');
    var phoneInput = document.getElementById('phone');
    var locationInput = document.getElementById('location');
    var emailInput = document.getElementById('email');
    var displayName = document.getElementById('display-name');
    var displayProfession = document.getElementById('display-profession');
    var displayAbout = document.getElementById('display-about');
    var displayPhone = document.getElementById('display-phone');
    var displayLocation = document.getElementById('display-location');
    var displayEmail = document.getElementById('display-email');
    if (displayName)
        displayName.textContent = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || '';
    if (displayProfession)
        displayProfession.textContent = (professionInput === null || professionInput === void 0 ? void 0 : professionInput.value) || '';
    if (displayAbout)
        displayAbout.textContent = (aboutInput === null || aboutInput === void 0 ? void 0 : aboutInput.value) || '';
    if (displayPhone)
        displayPhone.textContent = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || '';
    if (displayLocation)
        displayLocation.textContent = (locationInput === null || locationInput === void 0 ? void 0 : locationInput.value) || '';
    if (displayEmail)
        displayEmail.textContent = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || '';
    // Social Links
    var facebookInput = document.getElementById('facebook');
    var githubInput = document.getElementById('github');
    var codepenInput = document.getElementById('codepen');
    var mediumInput = document.getElementById('medium');
    var displayFacebook = document.getElementById('display-facebook');
    var displayGithub = document.getElementById('display-github');
    var displayCodepen = document.getElementById('display-codepen');
    var displayMedium = document.getElementById('display-medium');
    // Education
    var educationInput = document.getElementById('education');
    var displayEducation = document.querySelector('.edu .detail-content');
    if (displayEducation)
        displayEducation.innerHTML = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value) || '';
    // Work Experience
    var experienceInput = document.getElementById('experience');
    var displayExperience = document.querySelector('.detail-work .detail-content');
    if (displayExperience)
        displayExperience.innerHTML = (experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value) || '';
    if (displayFacebook)
        displayFacebook.href = (facebookInput === null || facebookInput === void 0 ? void 0 : facebookInput.value) || '';
    if (displayGithub)
        displayGithub.href = (githubInput === null || githubInput === void 0 ? void 0 : githubInput.value) || '';
    if (displayCodepen)
        displayCodepen.href = (codepenInput === null || codepenInput === void 0 ? void 0 : codepenInput.value) || '';
    if (displayMedium)
        displayMedium.href = (mediumInput === null || mediumInput === void 0 ? void 0 : mediumInput.value) || '';
    // Skills
    var skillsInput = document.getElementById('skills');
    var displaySkills = document.querySelector('.pg-skill .detail-content ul');
    if (displaySkills) {
        var skillsArray = skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
        displaySkills.innerHTML = (skillsArray === null || skillsArray === void 0 ? void 0 : skillsArray.map(function (skill) { return "\n            <li>\n                <span>".concat(skill, "</span>\n                <div class=\"sb-skeleton\">\n                    <div class=\"skillbar\"></div>\n                </div>\n            </li>\n        "); }).join('')) || '';
    }
});
