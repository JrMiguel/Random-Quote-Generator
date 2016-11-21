var trackRadomNumber = []; 
var randomNumber; 
var timeStart;

//Array of quotes
var quotes = [ 
  {
    quote: 'You can do anything, but not everything.',
    source: 'David Allen',
    cateogry: 'wisdom'
  },
  {
    quote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    source: 'Antoine de Saint-Exupéry',
    cateogry: 'wisdom'
  },
  {
    quote: 'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
    source: 'Ambrose Redmoon',
    cateogry: 'wisdom'
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    source: 'Gandhi',
    cateogry: 'wisdom'
  },
  {
    quote: 'You miss 100 percent of the shots you never take.',
    source: 'Wayne Gretzky',
    cateogry: 'wisdom'
  },
  {
    quote: 'Before I got married I had six theories about bringing up children; now I have six children and no theories.',
    source: 'John Wilmot',
    cateogry: 'humor'
  },
  {
    quote: 'What the world needs is more geniuses with humility, there are so few of us left.',
    source: 'Oscar Levant',
    cateogry: 'humor'
  },
  {
    quote: 'Always forgive your enemies; nothing annoys them so much.',
    source: 'Oscar Wilde',
    cateogry: 'humor'
  },
  {
    quote: 'When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.',
    source: 'Norm Crosby',
    cateogry: 'humor'
  },
  {
    quote: 'Those who believe in telekinetics, raise my hand.',
    source: 'Kurt Vonnegut',
    cateogry: 'humor'
  }
];

//Generates random number to select Quotes object 
function getRandomNumber() {
   var num = Math.floor(Math.random() * quotes.length);
         return num;
}

//Prints the quote and source to the page
function printQuote(message) {
    var outQuote = document.getElementById("theQuote");
        outQuote.innerHTML = message.quote;
    var outSource = document.getElementById("theSource");
        outSource.innerHTML = message.source;
}

//Sets body and button background color
function getRandomColor() {
    var hexCode = ['#4B0082','#0000FF','#36b55c','#FF0000','#FFA500'];
    var randomColor = hexCode[Math.floor(Math.random() * hexCode.length)];  
    document.getElementById('page').style.background = randomColor;
    document.getElementById('loadQuote').style.background = randomColor;
}


//Sets time interval for each quote to display
function setDisplayTime(func) {
    clearTimeout(timeStart);
    timeStart = setTimeout(func, 30000); 
}

//Determine random number to be used
function getRandomQuote(){ 
    for (var i = 0; i < 1; i++) {
        randomNumber = getRandomNumber();
        if (trackRadomNumber.indexOf(randomNumber) < 0) { //Make sure random number is not already in the tracking var, if not add 1 to var i
            i++;
        } else if (trackRadomNumber.length >= quotes.length) { //if tracking array length = quotes length, empty array and continue loop
            trackRadomNumber = [];
            i--;   
        } else { //continue loop 
            i--; 
        }
    }  
    trackRadomNumber.push(randomNumber); //Add number to tracking
    printQuote(quotes[randomNumber]); //Print quote and source
    setDisplayTime(getRandomQuote); //Start time interval 
    getRandomColor();//Set a random color 
 
}

getRandomQuote();

