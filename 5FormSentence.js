//////// LETS FORM A SENTENCE /////////

// JavaScript is awesome and I love it!



///////// ACCESSING 1 BY 1 //////////

// First Word: wow
// Second Word: JavaScript
// Third Word:  is
// Fourth Word: so
// Fifth Word: cool
console.log()
console.log('SOAL NO 1')
var word = 'wow JavaScript is so cool'
var FirstWord = word[0] + word[1] + word[2]
var SecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
var ThirdWord = word[15] + word[16]
var FourthWord = word[18] + word[19]
var FifthWord = word[21] + word[22] + word[23] + word [24]


console.log('First Word: ' + FirstWord)
console.log('Second Word: ' + SecondWord)
console.log('Third Word: ' + ThirdWord)
console.log('Fourth Word: ' + FourthWord)
console.log('Fifth Word: ' + FifthWord)






////////// SUBSTRING BREAKING SENTENCE //////////

// First Word: wow
// Second Word: JavaScript
// Third Word:  is
// Fourth Word: so
// Fifth Word: cool

console.log()
console.log('SOAL NO 2')
var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);


console.log('First Word: ' + firstWord3)
console.log('Second Word: ' + secondWord3)
console.log('Third Word: ' + thirdWord3)
console.log('Fourth Word: ' + fourthWord3)
console.log('Fifth Word: ' + fifthWord3)



/////// SUBSTRING BREAKING SENTENCE + .LENGTH ///////

// First Word: wow, with Length: 3
// Second Word: JavaScript, with Length: 10
// Third Word: is, with Length: 2
// Fourth Word: so, with Length: 2
// Fifth Word: cool, with Length: 4
console.log()
console.log('SOAL NO 3')
var word4 = 'wow JavaScript is so cool';
var firstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

console.log('First Word: ' + firstWord4 + ', with Length: ' + firstWord4.length)
console.log('Second Word: ' + secondWord4 + ', with Length: ' + secondWord4.length)
console.log('Third Word: ' + thirdWord4 + ', with Length: ' + thirdWord4.length)
console.log('Fourth Word: ' + fourthWord4 + ', with Length: ' + fourthWord4.length)
console.log('Fifth Word: ' + fifthWord4 + ', with Length: ' + fifthWord4.length)



