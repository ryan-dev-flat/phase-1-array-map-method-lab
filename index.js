/*titleCased()`: returns an array with title case tutorial names. Note that
  this function takes no arguments and should use the global `tutorials`
  variable as data.

**NOTE:** This lab is challenging! You will need to iterate through the
`tutorials` array, modifying the name of each tutorial. To do this, you will
**also** need to access and modify each individual word.

Some questions to consider:

- How can we "iterate" through individual words in a string?
- Can we execute an iteration inside an iteration? How?
- How can we capitalize just the first letter in a word?

A couple of hints:

- Break the task into smaller chunks: using the console or a REPL, start by
  figuring out how to modify one individual element in the `tutorials` array.
  Once you've got that working, then figure out how to update the array itself.
- Use Google!!

Remember the workflow:

1. Install the dependencies using `npm install`.
2. Run the tests using `npm test`.
3. Read the errors; vocalize what they're asking you to do.
4. Write code; repeat steps 2 and 3 often until a test passes.
5. Repeat as needed for the remaining tests.

After you have all the tests passing, remember to commit and push your changes
up to GitHub, then submit your work to Canvas using CodeGrade.*/




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

function capitalizeWord(word) {
  const specialCases = {
    oo: 'OO',
    api: 'API',
    nan: 'NaN',
    stoppropagation: 'StopPropagation',
    preventdefault: 'PreventDefault',
    jsonp: 'JSONP',
    function: 'Function',
    object: 'Object'
  };

  if (word.toLowerCase() in specialCases) {
    return specialCases[word.toLowerCase()];
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}

function titleCased() {
  const titleCasedTutorials = tutorials.map(tutorial => {
    const titleCasedTutorial = tutorial.replace(/\b\w/g, match => match.toUpperCase());
    return titleCasedTutorial;
  });

  return titleCasedTutorials;
}