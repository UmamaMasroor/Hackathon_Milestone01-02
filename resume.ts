// Handle form input and update resume
document.getElementById('generate-resume')?.addEventListener('click', () => {
    // Profile Picture
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const profilePicture = profilePictureInput?.files?.[0];
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const imgElement = document.getElementById('display-profile-picture') as HTMLImageElement;
            if (imgElement) {
                imgElement.src = e.target?.result as string;
            }
        };
        reader.readAsDataURL(profilePicture);
    }

    // Personal Details
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const professionInput = document.getElementById('profession') as HTMLInputElement;
    const aboutInput = document.getElementById('about') as HTMLTextAreaElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const locationInput = document.getElementById('location') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;

    const displayName = document.getElementById('display-name') as HTMLHeadingElement;
    const displayProfession = document.getElementById('display-profession') as HTMLParagraphElement;
    const displayAbout = document.getElementById('display-about') as HTMLParagraphElement;
    const displayPhone = document.getElementById('display-phone') as HTMLSpanElement;
    const displayLocation = document.getElementById('display-location') as HTMLSpanElement;
    const displayEmail = document.getElementById('display-email') as HTMLSpanElement;

    if (displayName) displayName.textContent = nameInput?.value || '';
    if (displayProfession) displayProfession.textContent = professionInput?.value || '';
    if (displayAbout) displayAbout.textContent = aboutInput?.value || '';
    if (displayPhone) displayPhone.textContent = phoneInput?.value || '';
    if (displayLocation) displayLocation.textContent = locationInput?.value || '';
    if (displayEmail) displayEmail.textContent = emailInput?.value || '';

    // Social Links
    const facebookInput = document.getElementById('facebook') as HTMLInputElement;
    const githubInput = document.getElementById('github') as HTMLInputElement;
    const codepenInput = document.getElementById('codepen') as HTMLInputElement;
    const mediumInput = document.getElementById('medium') as HTMLInputElement;

    const displayFacebook = document.getElementById('display-facebook') as HTMLAnchorElement;
    const displayGithub = document.getElementById('display-github') as HTMLAnchorElement;
    const displayCodepen = document.getElementById('display-codepen') as HTMLAnchorElement;
    const displayMedium = document.getElementById('display-medium') as HTMLAnchorElement;
    // Education
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const displayEducation = document.querySelector('.edu .detail-content') as HTMLElement;
    if (displayEducation) displayEducation.innerHTML = educationInput?.value || '';
    // Work Experience
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const displayExperience = document.querySelector('.detail-work .detail-content') as HTMLElement;
    if (displayExperience) displayExperience.innerHTML = experienceInput?.value || '';


    if (displayFacebook) displayFacebook.href = facebookInput?.value || '';
    if (displayGithub) displayGithub.href = githubInput?.value || '';
    if (displayCodepen) displayCodepen.href = codepenInput?.value || '';
    if (displayMedium) displayMedium.href = mediumInput?.value || '';

    

    
    // Skills
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const displaySkills = document.querySelector('.pg-skill .detail-content ul') as HTMLElement;
    if (displaySkills) {
        const skillsArray = skillsInput?.value.split(',').map(skill => skill.trim());
        displaySkills.innerHTML = skillsArray?.map(skill => `
            <li>
                <span>${skill}</span>
                <div class="sb-skeleton">
                    <div class="skillbar"></div>
                </div>
            </li>
        `).join('') || '';
    }
    
});

