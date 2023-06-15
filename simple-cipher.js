//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'dddddddddd') {
    this._key = key.toLowerCase().repeat(5);
  }

  encode(rawData) {
    const letterZval = 'z'.charCodeAt(0); // 122
    let encodedData = '';
    
    
    for(let i = 0; i < rawData.length; i++){
      let letter = rawData.charCodeAt(i);
      const shiftKey = this._key.charCodeAt(i) - 97;

      letter += shiftKey; //key
      
      if(letter > letterZval){
        // Wrap
        letter -= 26; // number of alphabets
      } 

      //append to create a string
      encodedData += String.fromCharCode(letter);
    }

    return encodedData;
  }

  decode(encriptedData) {
    const letterAval = 'a'.charCodeAt(0);
    let decodedData = '';
    
    
    for(let i = 0; i < encriptedData.length; i++){
      let letter = encriptedData.charCodeAt(i);
      const shiftKey = this._key.charCodeAt(i) - 97;

      letter -= shiftKey;
      
      if(letter < letterAval){
        letter += 26;
      }

      decodedData += String.fromCharCode(letter);
    }

    return decodedData;
  }

  get key() {
    // todo: implement
    return this._key;
  }
}