//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'dddddddddd') {
    this._key = key.toLowerCase();
  }

  encode(rawData) {
    let userKey = this._key;
    let encodedData = '';
    // while(userKey.length < rawData.length){
    //   userKey = userKey.repeat(1);
    // }
    for(let i = 0; i < rawData.length; i++){
      let char = convertKey(rawData[i]);
      let keyChar = convertKey(userKey[i]);// make sure the key is same length before this
      let difference = Math.abs(char - keyChar);
      let encodedCharCode = rawData.charCodeAt(i);
      let encodedChar = encodedCharCode + difference;  
      if(encodedChar > 122){
        encodedChar = 97 + (encodedChar - 122);
        encodedData += String.fromCharCode(encodedChar);
      } else if(encodedChar < 97){
        encodedChar = 122 - Math.abs(encodedChar - 97);
        encodedData += String.fromCharCode(encodedChar);
      } else{
        encodedData += String.fromCharCode(encodedChar);
      }
    }

    return encodedData;
  }

  decode(encriptedData) {
    let userKey = this._key;
    let decodedData = '';
    // while(userKey.length < encriptedData.length){
    //   userKey = userKey.repeat(1);
    // }

    for(let i = 0; i < encriptedData.length; i++){
      let char = convertKey(encriptedData[i]);
      let keyChar = convertKey(userKey[i]);// make sure the key is same length before this
      let difference = Math.abs(char - keyChar);
      let encodedCharCode = encriptedData.charCodeAt(i);
      let encodedChar = encodedCharCode - difference; 
      if(encodedChar > 122){
        encodedChar = 97 + (encodedChar - 122);
        decodedData += String.fromCharCode(encodedChar);
      } else if(encodedChar < 97){
        encodedChar = 122 - Math.abs(encodedChar - 97);
        decodedData += String.fromCharCode(encodedChar);
      } else {
        decodedData += String.fromCharCode(encodedChar);
      }
    }
    return decodedData;
  }

  get key() {
    // todo: implement
    const userKey = this._key;
    return userKey;
  }
}

//ascii will add to the current char to encode and subtract from to decode




//function to convert from char to number for further use
const convertKey = function (character){
  switch (character.charAt()) {
    case 'a':
      return  0;
    case 'b':
      return  1;
    case 'c':
      return  2;
    case 'd':
      return  3;
    case 'e':
      return  4;
    case 'f':
      return  5;
    case 'g':
      return  6;
    case 'h':
      return  7;
    case 'i':
      return  8;
    case 'j':
      return  9;
    case 'k':
      return  10;
    case 'l':
      return  11;
    case 'm':
      return  12;
    case 'n':
      return  13;
    case 'o':
      return  14;
    case 'p':
      return  15;
    case 'q':
      return  16;
    case 'r':
      return  17;
    case 's':
      return  18;
    case 't':
      return  19;
    case 'u':
      return  20;
    case 'v':
      return  21;
    case 'w':
      return  22;
    case 'x':
      return  23
    case 'y':
      return  24;
    case 'z':
      return  25;
    default:
      return null;
  }
}