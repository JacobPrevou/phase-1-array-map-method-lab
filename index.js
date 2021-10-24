const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function(tutorial) {
// return 



// function character(char) {
// return char.replace(char[0], char[0].toUpperCase());
// }

// function titleCased(array) {
//   for(let string of array){
//     return string.toLowerCase().split(' ').map((character)).join(' ');
//   }
// }

function titleCased(array){
  for(let string of array){
    return string.toLowerCase().split(' ').map(function(char) {
      return char.replace(char[0], char[0].toUpperCase());
    }).join(' ')
  }
}

const newArray = tutorials.map(titleCased)

// const newArray = tutorials.map((array) => {
//   for(let string of array){
//     return string.toLowerCase().split(' ').map(function(char) {
//       return char.replace(char[0], char[0].toUpperCase());
//     }).join(' ')
//   }
// })