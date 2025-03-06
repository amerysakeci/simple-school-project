function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomJSCode(length = 10) {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += `${getRandomInt(256)}`;
  }
  return code;
}

console.log(generateRandomJSCode());
