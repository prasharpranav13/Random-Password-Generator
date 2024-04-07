let btn = document.getElementById("btn");
let passwordBox = document.getElementById("password");
let copyBtn = document.getElementById("copyBtn");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-{[}]|<>?";
const combined = uppercase + lowercase + numbers + symbols;
btn.onclick = () => {
  generatePassword();
};
const generatePassword = () => {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  //don't use length -- -> first time 12 then 4
  while (length >= password.length) {
    password += combined[Math.floor(Math.random() * combined.length)];
  }
  passwordBox.value = password;
};

copyBtn.onclick = () => {
  copyPassword();
};
const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};
