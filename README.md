## A fun and simple tap evolution game! What's your favorite creature?

You will help your creature evolve by clicking! 

First, use JavaScript to add your creature’s name to a <h2> tag:
Now add this HTML to the <body> tag of your new webpage:

<h1>Creature Name:</h1>
<h2 id="name"></h2>

Store the <h2> tag’s DOM element in a variable named whatever you like:

const (enter name) = document.getElementById('name');

Next, use JavaScript to add your creature’s name inside the <h2> tags. 

Add the following HTML to the code from the previous exercise:

<!-- previous HTML above -->
<p>Current stage of evolution: <span id="evolution"></span></p>
<button id="evolve">Evolve</button>

And add the following JavaScript to the top of main.js:

const evolveBtn = document.getElementById('evolve');

let currentStage = 'Simple Spore';
let clicks = 0;

// Add the initial stage of evolution to the span id="evolution"

evolveBtn.addEventListener("click", function evolve() {
  // add 1 to the clicks variable
  // When the number of clicks reaches 10, add a second stage of evolution to the DOM!
  // You choose the name of each additional stage.
});

Now, first you’ll need to replace the contents of <span id="evolution"></span> with the initial stage of evolution of your creature. Each time you click the “evolve” button you will keep track of the number of clicks by adding 1 to the clicks variable. 

## Challenge Yourself

* Create at least 5 stages of growth for your creature.
* Transition between the different stages as you click the button. * One stage for 10 or more clicks.
* As your creature evolves, add some CSS using element.style
* When your creature is fully evolved, you should alert("Your creature has attained Saṃsāra.")

#### Have fun!