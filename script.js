
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const passwordBox = document.getElementById('password');

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = +lengthSlider.value;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumber = document.getElementById('numbers').checked;
  const useSymbol = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=<>?/{}[]|~";

  let characters = "";
  if (useUpper) characters += upper;
  if (useLower) characters += lower;
  if (useNumber) characters += numbers;
  if (useSymbol) characters += symbols;

  if (characters === "") {
    passwordBox.textContent = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * characters.length);
    password += characters[rand];
  }

  passwordBox.textContent = password;
}

function copyPassword() {
  const password = passwordBox.textContent;
  if (!password || password.includes("Select")) return;

  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  });
}
