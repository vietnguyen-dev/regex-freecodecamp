// Test: /string/
// To find string within string
// Returns true or false
let name1 = 'Gary is a bum'
let nameToTest = /Gary/
let nameResult = nameToTest.test(name1)
console.log(nameResult);
    // Will return true 
    // Will only work if literal match, so no GARY or gary


// Alternation / OR operator: string|string
// Matches pattern before and after it
// Can search for more: string|string|string
let pet = 'Gary has a pet lizard'
let petToTest = /lizard|dog|cat/
let petResult = petToTest.test(pet)
console.log(petResult)
    //Will return true if pet has the string lizard, dog or cat


// Ignoring casing- i flag: /i
// Ignores casing while looking throughs string
let name2 = 'GarY'
let nameToTest2 = /gary/i
let result3 = nameToTest2.test(name2)
console.log(result3)
    //Will return true no as long as gary is spelt with those letters in order


// Extracting Matches: .match()
// Will return array with singular index of match
// Opposite of .test()
// Note that in test the .test() method is used on the regular expression
// In .match() the method is used on the string, see below
let nameSentence = 'Gary is a dork'
let nameToMatch = /gary/i
let result4 = nameSentence.match(nameToMatch)
console.log(result4)


// Finding more than first match - g flag: /g
// Will return array of all matches
// Regex can have multiple flags:  /Tom/gi
let sentenceWNames = 'Gary is cool, gary is fun, GARY is productive'
let nameToMatch2 = /gary/gi
let result5 = sentenceWNames.match(nameToMatch2)
console.log(result5)
    //will return array of strings of the name gary in given casing


//wildcard period - dot: /./
//searches for string that includes given characaters. dot will be placeholder 
let names2 = 'Tom and tim'
let namesToMatch = /T.m/gi
let result6 = namesToMatch.test(names2)
let result7 = names2.match(namesToMatch);
console.log(result6, result7)
    //will return ['Tom', 'tim]

//character class: [aieou]
// find strings with specfic characters
let giantPhrase = 'Fii fie foe fol ful'
let phraseMatch = /f[io]./gi
let phraseResult = giantPhrase.match(phraseMatch)
console.log(phraseResult)

//hyphen character [a-z]
//find strings in range of defined alphabet characters
let namesList = 'fill till drill gill mill bill will gile mile'
let phraseToMatch = /[a-g]il[le]/gi
let phraseToMatchResult = namesList.match(phraseToMatch)
console.log(phraseToMatchResult)

//hyphen can also be used to range of numbers
let nameNumCombo = 'Fart1 FaRt2 carE4 Dare6'
let nameNumMatch = /[c-f]ar.[0-9]/gi
let nameNumMatch2 = /[a-z1-9]/gi;
let nameNumResult = nameNumCombo.match(nameNumMatch)
let nameNumResult2 = nameNumCombo.match(nameNumMatch2);
console.log(nameNumResult)
console.log(nameNumResult2)
    //when nums only works to 9, 10 is just 1 then 0


//negative character sets: [^char]
//characters that you dont want to include
let quote = 'Tom tim T0n ton tol'
let quoteMatch = /t[^i0]./gi
let quoteResult = quote.match(quoteMatch)
console.log(quoteResult)


//finding repeating characters /+char/
//will return string with all repeated defined character
let repeatStr = 'li1 MiIii4 nIi2 oIiI3'
let repeatMatch = /[l-o]i+[0-9]/gi
let repeatResult = repeatStr.match(repeatMatch)
console.log(repeatResult)

let repeatStr2 = "Mississippi";
let repeatMatch2 = /[s+][s+]/gi;
let repeatResult2 = repeatStr2.match(repeatMatch2);
console.log(repeatResult2);
