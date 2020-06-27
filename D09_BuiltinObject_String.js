/*****  String   ******/

let message = 'This is my first message';
let message2 = message;

console.log ('Length of string is', message.length);

// Access each individual character, but cannot be changed
// In JavaScript, strings are immutable
message[0] = 'X'; // This will not throw an error but will not be change
                  // You need to create a Copy with the desire result
console.log (message);

function replaceAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

message = replaceAt (message, 0 , 'X');
console.log (message, message2);

// includes , startswith, endsWith, toLowerCase, toUpperCase, indexOf , replace, trim
console.log ( message.includes('my'));

const anotherMessage = new String("Hello World");
console.log(anotherMessage);
console.log (anotherMessage.startsWith('Hell'));
console.log (anotherMessage.endsWith('orld'));

console.log (anotherMessage.indexOf ('wo')); // Returns -1 if not found
console.log (anotherMessage.indexOf ('Wo')); // Returns 6

console.log(anotherMessage.toLowerCase().indexOf('wo')) ; // returns 6

console.log(anotherMessage.toLowerCase().indexOf('o',5)) ; // returns 7 , the second o, search starts at position 5

const message3 = message2.replace('first', 'second') ; // Replace takes regular expressions as arguments
console.log (message2,message3);

const messageWithSpaces = '     new spaces at the beginning and at    the end    ';
console.log (messageWithSpaces);
console.log (messageWithSpaces.trim());

// Escape charaters
const literal = '     This is a message with \'quotes\' to see witn          new line \n after this';
console.log (literal);

// Spliting the string into array

let words = literal.split(' '); // Separated by a single white space, will not work with more spaces
console.log(words);

// Regular expressions should be enclosed  / (regular expression)   /
words = literal.split(/ ([ ]+) /); // use a regular expression of one or more spaces
console.log(words);

words = literal.split(/ (\s+) /); // use a regular expression of denoted spaces \s
console.log(words);

// Template literals, using the backtick character, very useful

const blockMessage = 'This a big text of code \n' +
'With multiple lines to see \n' +
'how ugly this looks';
console.log(blockMessage);

// instead
const anotherBlock = `This is a big text of code
With 'multiple' lines to see
and this looks better`;

console.log(anotherBlock);

let name = 'Rogger';
let accountNo = '778888';
const mailMessage = `Hi ${name}
We have an importa message about your account number ${accountNo}
Please contact us

The bank`;

console.log (mailMessage);









