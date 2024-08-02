// النصوص باللغتين
const translations = {
    en: {
        heading: "Hello, welcome!",
        paragraph: "Iam frontend designer",
        button: "EN"
    },
    ar: {
        heading: "مرحباً، أهلاً بكم!",
        paragraph: "فرونت اند ديزاينر",
        button: "AR"
    }
};

let currentLanguage = 'en';

const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');
const languageToggle = document.getElementById('languageToggle');

function switchLanguage() {
    if (currentLanguage === 'en') {
        currentLanguage = 'ar';
    } else {
        currentLanguage = 'en';
    }

    heading.textContent = translations[currentLanguage].heading;
    paragraph.textContent = translations[currentLanguage].paragraph;
    languageToggle.textContent = translations[currentLanguage].button;
}

languageToggle.addEventListener('click', switchLanguage);

// alert
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Hello to about Page');
});


