const darkModeToggle = document.getElementById('dark-mode-toggle');

const wrapperElements = document.querySelectorAll('.wrapper');
const innerBoxElements = document.querySelectorAll('.inner-box');
const headerNavElements = document.querySelectorAll('nav ul li');
const headerNavLinkElements = document.querySelectorAll('nav ul li a');
const socialInnerBoxElements = document.querySelectorAll('.social-inner-box');


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    darkModeToggle.classList.toggle('light-theme');
    headerNavElements.forEach(element => element.classList.toggle('light-theme'));
    headerNavLinkElements.forEach(element => element.classList.toggle('light-theme'));
    wrapperElements.forEach(element => element.classList.toggle('light-theme'));
    innerBoxElements.forEach(element => element.classList.toggle('light-theme'));
    socialInnerBoxElements.forEach(element => element.classList.toggle('light-theme'));
})