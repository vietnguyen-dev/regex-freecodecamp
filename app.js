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
