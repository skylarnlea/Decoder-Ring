// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const lookup = {
      "a": "11",
      "b": "21",
      "c": "31",
      "d": "41",
      "e": "51",
      "f": "12",
      "g": "22",
      "h": "32",
      "i": "42",
      "j": "42",
      "k": "52",
      "l": "13",
      "m": "23",
      "n": "33",
      "o": "43",
      "p": "53",
      "q": "14",
      "r": "24",
      "s": "34",
      "t": "44",
      "u": "54",
      "v": "15",
      "w": "25",
      "x": "35",
      "y": "45",
      "z": "55"
    }
    const reverseLookup = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d",
      "51": "e",
      "12": "f",
      "22": "g",
      "32": "h",
      "42": "(i/j)",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "o",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v",
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z",
      " ": " "
    }
    let result = ""
    //encode
    if(encode) {
      //look at each letter of the input
      for(let letter of input.toLowerCase()) {
        if(letter === " ") {
          result += letter
        }
        else {
          let polybiusValue = lookup[letter]           //find the corresponding value in the lookup object
          result += polybiusValue                      //add value to result
        }
      }
    }
    //decode
    else {
      const noSpaceInput = input.toString().replace(" ","")
      if(noSpaceInput.length % 2 === 1) { //7 % 2 === 1
        return false
      }
      //look at each pair of characters in the input
      //loop through the input, if the first character is a number, look at the first 2 numbers, if the first character is a space, add the space and skip to the next number
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
            result += input[i]
            i -= 1
        }
        else {
          const firstValue = input[i]
          const secondValue = input[i+1]
          const lookupKey = `${firstValue}${secondValue}`  
          result += reverseLookup[lookupKey]
        }
      }         //ignore any spaces and move on to the next input
    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
