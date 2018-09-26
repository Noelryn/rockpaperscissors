### A Rock, Paper, Scissors game


- Wrote in JavaScript
- Tested With npm
- deployed using Github pages

-------------------------------------
### User Stories


As a player,
I would like a rock, paper, scissors game to play on a web app.

**Tasks**

- Create a deployed website
- Create a functional web app for the rock, paper scissors game

As a player,
- I would like it to have three different buttons for rock, paper and scissor.

- In order to do so, I would like it to be easy to understand

**Tasks**

- Create a button for rock
- Create a button for paper
- Create a button for scissor

As a player,
- I would like to have an oppenonent to play against.
- In order to do so the game would need a computer opponent.

**Tasks**

- Create a method to randomly return rock, paper or scissor.


As a player,
- I would like to have a display that shows my input and my opponents input,
- I would also like to see a win or lose result

**Tasks**

- Create a box that shows players results.
- Create a box that shows opponents results.
- Create method for a win or lose output.


As an owner,
- I would like visitors to the site to be able to play rock paper scissor on a stylish web app.
- In order to do this it needs to be a fully functional web app with a computer opponent.
- I would like it to have a fun colourful stylish theme.

**Tasks**

- Create a rock, paper, scissor game
- Create three funtional buttons
- Add a computer opponent
- Add a colourful stylish theme

<h1>Rock, Paper, Scissors</h1>

        <div class="game">
            <script>
                let userChoice = prompt("FIGHT!");
                if (! userChoice) {
                    document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
                } else {
                    document.write("<p>Player 1:" + " " + userChoice + "</p>");
                }
            </script>
        </div>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        lang="en"