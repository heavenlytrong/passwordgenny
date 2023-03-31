var nonAlphabet = [
    '!',
    '@',
    '#',
    '$',
    '%',
    "^",
    '&',
    '*',
    '(',
    ')',
    '[',
    ']',
    '|',
    ';',
    ':',
    '"',
    '{',
    '}',
    '<',
    '>',
    '+',
    '_',
    '.',
  ];
  
  var numCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var lowerCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  var capCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  

  function getPasswordOptions() {

    var length = parseInt(
      prompt('# of characters between 8 and 128?'),
      10
    );
  
    
    if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;
    }
  
    if (length < 8) {
      alert('Password length must be minimum 8 characters');
      return null;
    }
  
    
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return null;
    }
  
    
    var hasSpecialCharacters = confirm(
      ' OK to confirm including special characters.'
    );
  
    
    var hasNumericCharacters = confirm(
      'OK to confirm including numeric characters.'
    );
  
   
    var hasLowerCasedCharacters = confirm(
      ' OK to confirm including lowercase characters.'
    );
  
    
    var hasUpperCasedCharacters = confirm(
      'OK to confirm including uppercase characters.'
    );
  
   
    if (
      nonAlphabet === false &&
      numCharacters === false &&
      lowerCharacters === false &&
      capCharacters === false
    ) {
      alert('Must select at least one character type');
      return null;
    }
  
   
    var passwordOptions = {
      length: length,
      nonAlphabet: nonAlphabet,
      numCharacters: numCharacters,
      lowerCharacters: lowerCharacters,
      capCharacters: capCharacters,
    };
  
    return passwordOptions;
  }
  
  
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
 
  function generatePassword() {
    var options = getPasswordOptions();

    var result = [];
  

    var possibleCharacters = [];
  

    var guaranteedCharacters = [];
  

    if (!options) return null;
  
    
    if (options.nonAlphabet) {
      possibleCharacters = possibleCharacters.concat(nonAlphabet);
      guaranteedCharacters.push(getRandom(nonAlphabet));
    }
  
    if (options.numCharacters) {
      possibleCharacters = possibleCharacters.concat(numCharacters);
      guaranteedCharacters.push(getRandom(numCharacters));
    }
  
   
    if (options.lowerCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCharacters);
      guaranteedCharacters.push(getRandom(lowerCharacters));
    }
  
    
    if (options.capCharacters) {
      possibleCharacters = possibleCharacters.concat(capCharacters);
      guaranteedCharacters.push(getRandom(capCharacters));
    }
  
    
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  

    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  

    return result.join('');
  }
  

  var generateBtn = document.querySelector('#generate');
  

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  

  generateBtn.addEventListener('click', writePassword);
  