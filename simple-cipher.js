//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'dddddddddd') {
    this._key = key.toLowerCase().repeat(5);
  }

  encode(rawData) {
    const letterAval = 'a'.charCodeAt(0);
    const letterZval = 'z'.charCodeAt(0);
    let encodedData = '';
    
    for(let i = 0; i < rawData.length; i++){
      let letter = rawData.charCodeAt(i) - letterAval;
      
      if(letter < 0){
        letter += letterZval;
      }
      encodedData += String.fromCharCode(letter);
    }

    return encodedData;
  }

  decode(encriptedData) {
    const letterAval = 'a'.charCodeAt(0);
    const letterZval = 'z'.charCodeAt(0);
    let decodedData = '';
    
    for(let i = 0; i < encriptedData.length; i++){
      let letter = encriptedData.charCodeAt(i) - letterAval;
      
      if(letter < 0){
        letter += letterZval;
      }
      decodedData += String.fromCharCode(letter);
    }
    return decodedData;
  }

  get key() {
    // todo: implement
    const userKey = this._key;
    return userKey;
  }
}