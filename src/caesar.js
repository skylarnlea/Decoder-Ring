// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
// Encodes the input string based on shift value
function encoder(input, shift) {
  const newInput = input.toLowerCase(); // Converts input to lowercase
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Alphabet reference
  let message = ''; // Initializes the encoded message

  for (let i = 0; i < newInput.length; i++) { // Iterates through the input string
    const letter = newInput[i]; // Current letter
    if (!alphabet.includes(letter)) { // Checks if the letter is not in the alphabet
      message += letter; // Adds the non-alphabetic character to the message as is
    }
    else {
      const index = alphabet.indexOf(letter); // Finds the index of the letter in the alphabet
      let newIndex = index + shift; // Calculates new index after shift
      if (newIndex >= 26) { // Wraps around the alphabet if necessary
        newIndex -= 26;
      }
      if (newIndex < 0) { // Handles negative shift
        newIndex += 26;
      }
      message += alphabet[newIndex]; // Appends the shifted letter to the message
    }
  }
  return message; // Returns the encoded message
}

// Decodes the input string based on shift value
function decoder(input, shift) {
  const newInput = input.toLowerCase(); // Converts input to lowercase
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Alphabet reference
  let message = ''; // Initializes the decoded message

  for (let i = 0; i < newInput.length; i++) { // Iterates through the input string
    const letter = newInput[i]; // Current letter
    if (!alphabet.includes(letter)) { // Checks if the letter is not in the alphabet
      message += letter; // Adds the non-alphabetic character to the message as is
    }
    else {
      const index = alphabet.indexOf(letter); // Finds the index of the letter in the alphabet
      let newIndex; // Initializes new index for the shifted letter
      if (shift >= 0) {
        newIndex = index - shift; // Calculates new index for positive shift
      }
      else {
        newIndex = index - (shift + 26); // Adjusts new index for negative shift
      }
      if (newIndex < 0) { // Wraps around the alphabet if necessary
        newIndex += 26;
      }
      if (newIndex >= 26) { // Handles overshooting the alphabet length
        newIndex -= 26;
      }
      message += alphabet[newIndex]; // Appends the shifted letter to the message
    }
  }
  return message; // Returns the decoded message
}



// Function that can encode or decode a message
function caesar(input, shift, encode = true) {
  // Checks if the shift value is valid
  try {
    if (shift === undefined) throw Error("Shift value must be provided.")
    if (shift === 0) throw Error("Shift value cannot be 0.");
    if (shift < -25 || shift > 25) throw Error("Shift value must be between -25 and 25.")
  } catch (error) {
    console.log(`${error}`);
    return false; // Returns false if shift value is not valid
  }

  // Calls encoder function if encoding
  if (encode) {                     
    return encoder(input, shift);
  }
  // Calls decoder function if decoding
  else {                            
    return decoder(input, shift);
  }
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };