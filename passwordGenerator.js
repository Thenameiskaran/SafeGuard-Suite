document.addEventListener("DOMContentLoaded", function () {
    const passwordLengthInput = document.getElementById("passwordLength");
    const includeUppercaseCheckbox = document.getElementById("includeUppercase");
    const includeNumbersCheckbox = document.getElementById("includeNumbers");
    const includeSpecialCharsCheckbox = document.getElementById("includeSpecialChars");
    const generateButton = document.getElementById("generateButton");
    const passwordDisplay = document.getElementById("passwordDisplay");

    generateButton.addEventListener("click", function () {
        const length = parseInt(passwordLengthInput.value, 10);
        const includeUppercase = includeUppercaseCheckbox.checked;
        const includeNumbers = includeNumbersCheckbox.checked;
        const includeSpecialChars = includeSpecialCharsCheckbox.checked;

        const generatedPassword = generatePassword(length, includeUppercase, includeNumbers, includeSpecialChars);
        passwordDisplay.textContent = generatedPassword;
    });

    function generatePassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_-+=<>?';

        let charSet = lowercaseChars;

        if (includeUppercase) {
            charSet += uppercaseChars;
        }

        if (includeNumbers) {
            charSet += numberChars;
        }

        if (includeSpecialChars) {
            charSet += specialChars;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet.charAt(randomIndex);
        }

        return password;
    }
});
