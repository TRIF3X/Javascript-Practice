//using the test method using .text()
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)

//match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let literal = waldoRegex.test(waldoIsHiding);
console.log(literal)

//match literal strings with different possibilites
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; //using the 'or' operator, we search if any of these words are found
let petSearch = petRegex.test(petString);
console.log(petSearch)

//ignore case while matching using the 'i' flag
let ignoreCaseString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let ignoreCase = fccRegex.test(ignoreCaseString);
console.log(ignoreCase)

//extract matches using .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let extractUsingMatch = extractStr.match(codingRegex);
console.log(extractUsingMatch)

//find more than the first match using the 'g' flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let starMatch = twinkleStar.match(starRegex);
console.log(starMatch)

//match anything with wildcard '.'
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let matchAnythingWildcard = unRegex.test(exampleStr);
console.log(matchAnythingWildcard)

//match single charecter with multiple possibilies
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let matchVowels = quoteSample.match(vowelRegex);
console.log(matchVowels)

//match letters of the alpabet
let quoteSampleAlphabet = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let matchAlpabet = quoteSampleAlphabet.match(alphabetRegex);
console.log(matchAlpabet)

//match numbers and letters
let quoteNumbersLetters = "Blueberry 3.141592653s are delicious.";
let myRegexNumbers = /[h-s2-6]/ig; 
let matchLettersNumbers = quoteNumbersLetters.match(myRegexNumbers);
console.log(matchLettersNumbers)

//match single charecters not specified using ^ the caret charecter
let sampleNotSpecified = "3 blind mice.";
let myRegexNotSpecified = /[^aeiou0-9]/ig; 
let notSpecifiedResult = sampleNotSpecified.match(myRegexNotSpecified);
console.log(notSpecifiedResult)

//match charecters the occur ONE or more times in a row
let difficultSpelling = "Mississippi";
let myRegexOccursMoreThanOnce = /s+/ig; //uses +
let occursMoreThanOnce = difficultSpelling.match(myRegexOccursMoreThanOnce);
console.log(occursMoreThanOnce)

//match charecters that occur ZERO or more times using *
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult)

//find charecters with lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegexLazy = /<.*?>/; //find the h1 tag
let resultLazy = text.match(myRegexLazy);
console.log(resultLazy)

//find one or more criminals on the hunt represented by the letter C
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /c+/i; 
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

//match beggining string patterns using the ^ caret charecter
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^cal/i; 
let resultCal = calRegex.test(rickyAndCal);
console.log(resultCal)

//match ending string patterns using $ sign
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let resultCaboose = lastRegex.test(caboose);
console.log(resultCaboose)

//match all letters and numbers, the '\w' shortcut is equal to [A-Za-z0-9_]
let quoteSampleV2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let resultAlphaV2 = quoteSampleV2.match(alphabetRegexV2).length;
console.log(resultAlphaV2)

//match everything but letters and numbers, the '\W' shortcut is equal to [^A-Za-z0-9_]
let matchNonLettersAndNumbers = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let resultNon = matchNonLettersAndNumbers.match(nonAlphabetRegex).length;
console.log(resultNon)

//match all numbers using '\d' which is equal to [0-9]
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let resultNumsOnly = numString.match(numRegex).length;
console.log(resultNumsOnly)

//match all non numbers using '\D' which is equal to [^0-9]
let nonNumString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; 
let resultNonNumber = numString.match(noNumRegex).length;
console.log(resultNonNumber)

//restrict possible usernames
// 1) The only numbers in the username must be at the end. Can be multiple
// 2) Username letters can be upper or lowercase
// 3) Usernames have to be at least two charecters long. A two leter username can only use alphabet letter charecters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; 
let resultUserCheck = userCheck.test(username);
console.log(resultUserCheck)

//match whitespace using \s
let sampleWhitespace = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultWhitespace = sampleWhitespace.match(countWhiteSpace);
console.log(resultWhitespace)

//match non-whitespace charecters using \S
let sampleNonWhitespace = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let resultNonWhitespace = sampleNonWhitespace.match(countNonWhiteSpace);
console.log(resultNonWhitespace)

//specify upper and lower numbers of matches using {first,last} as a quanity spacer
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/ig; 
let resultSpecify = ohRegex.test(ohStr);
console.log(resultSpecify)

//specify only lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // specifies there must be at least 4 z's
let resultHa = haRegex.test(haStr);
console.log(resultHa)

//specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; //specifies I need exactly 4 m's 
let resultTim = timRegex.test(timStr);
console.log(resultTim)

//check for all or none using ?
let favWord = "favorite";
let favRegex = /favou?rite/; //specifies the u would be optional
let resultFav = favRegex.test(favWord);
console.log(resultFav)

//Postive ? and Negative ?! Lookahead
//using lookaheads, match passwords that are >5 charecteres, and have 2 consecutive digits
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
let resultPW = pwRegex.test(sampleWord);
console.log(resultPW)

//Reuse patterns using capture groups ( )
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let resultRepeat = reRegex.test(repeatNum);
console.log(resultRepeat)

//use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okay-dokey"; 
let resultCapture = huhText.replace(fixRegex, replaceText);
console.log(resultCapture)

//remove whitespace from start and end
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/; 
let resultRemove = hello.replace(wsRegex, ''); 
console.log(resultRemove)