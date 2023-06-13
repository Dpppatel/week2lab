//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'd') {
    // todo: implement
    this.key = key.toLowerCase;
  }

  encode(rawData) {
    // todo: implement
    this.rawData = rawData;
    let encodedData = '';
    let convertValue = convertKey(this.key);
    for(let i = 0; i < this.rawData.length; i++){
      let asciiVal = this.rawData.charAt(i);
      if(!asciiVal >= 122){     // make sure to remove a problem that might cause it to go out of the 97-122 range of asciiVal;
        asciiVal += convertValue;
      } else {
        asciiVal = 97 + convertValue;
      }
      encodedData += String.fromCharCode(asciiVal);
    }
  }

  decode(encriptedData) {
    // todo: implement
    this.encriptedData = encriptedData;
    let decodedData = '';
    let convertValue = convertKey(this.key);
    for(let i = 0; i < this.rawData.length; i++){
      let asciiVal = this.rawData.charAt(i);
      if(!asciiVal <= 97){           // make sure to remove a problem that might cause it to go out of the 97-122 range of asciiVal;
        asciiVal -= convertValue;
      } else {
        asciiVal = 122 - convertValue;
      }
      decodedData += String.fromCharCode(asciiVal);
    }
  }

  get key() {
    // todo: implement
    return this.charKey;
  }
}

//ascii will add to the current char to encode and subtract from to decode




//function to convert from char to number for further use
function convertKey(character){
  character = character.charAt(0);
  let returnValue = null;
  switch (character) {
    case 'a':
      returnValue = 0;
      break;
    case 'b':
      returnValue = 1;
      break;
    case 'c':
      returnValue = 2;
      break;
    case 'd':
      returnValue = 3;
      break;
    case 'e':
      returnValue = 4;
      break;
    case 'f':
      returnValue = 5;
      break;
    case 'g':
      returnValue = 6;
      break;
    case 'h':
      returnValue = 7;
      break;
    case 'i':
      returnValue = 8;
      break;
    case 'j':
      returnValue = 9;
      break;
    case 'k':
      returnValue = 10;
      break;
    case 'l':
      returnValue = 11;
      break;
    case 'm':
      returnValue = 12;
      break;
    case 'n':
      returnValue = 13;
      break;
    case 'o':
      returnValue = 14;
      break;
    case 'p':
      returnValue = 15;
      break;
    case 'q':
      returnValue = 16;
      break;
    case 'r':
      returnValue = 17;
      break;
    case 's':
      returnValue = 18;
      break;
    case 't':
      returnValue = 19;
      break;
    case 'u':
      returnValue = 20;
      break;
    case 'v':
      returnValue = 21;
      break;
    case 'w':
      returnValue = 22;
      break;
    case 'x':
      returnValue = 23
      break;
    case 'y':
      returnValue = 24;
      break;
    case 'z':
      returnValue = 25;
      break;
    default:
      return null;
  }
  return returnValue;
}