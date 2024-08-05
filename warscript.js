
//This is the week 9 coding assignment, making the card game War for the console.

//      Objectives: 
//  - Create classes Card, Deck
//  - Deal 26 cards to each Player from a Deck of 52 cards. (Heart, Spade, Club, Diamond, numbers)
//  - Shuffle the cards and hand out to players.
//  - Iterate through the turns where each Player plays a Card.
//  - The Player who played the higher card is awarded a point.
//  - Ties result in zero points for both Players.
//  - After all cards have been played, display the score and declare the winner.


//  Deck class:
//     - Contains array to store the cards in the deck. 
//     - An array to store the card values, such as Ace, 2, 3, 4, etc.
//     - An array to store the Suit of the cards, (Heart, Spade, Club, Diamond)

class Deck {
    constructor(){
    this.deck = []
    this.values = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King'
     ]

    this.suits = [
        '♦ Diamonds ♦',
        '♠ Spades ♠',
        '♥ Hearts ♥',
        '♣ Clubs ♣'
    ]
    }    

    //Method that will iterate over suits and values of cards to create a deck.
    // Push a new card object into this.deck constructor

    createDeck(){
        //Nested for loop will iterate through the suits and values of the cards and 
        //  the value of the card will be in each suit and will run until there is no more suits.
        for (let i =0; i < this.suits.length; i++){
            for(let v = 0; v < this.values.length; v++){
                let card = { 
                    name : `${this.values[v]} of ${this.suits[i]}`,
                    //adds 1 to the value of each card in the deck.
                    value : v + 1
                }

                this.deck.push(card)
                
            }
        }
    }

    //Method that will shuffle/randomize the 52 cards in the array.

    shuffleDeck(){
        //for loop that randomizes an array using methods.
        for(let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
        }
    }
}

//  Game class:
//     - This class contains the class for playing the game.
//     - Actually create an instance of the deck inside the game class.
//     - Shuffle the deck of cards
//     - Pass out the cards to the players.
//     - Two players need hand, and score for their turns.

class Game{
    constructor(){
        // The players will be objects that contain each a value, name, score and hand for their cards. 
        this.player1 = {
            name : 'Player 1',
            score : 0,
            hand : []
        }

        this.player2 = {
            name : 'Player 2',
            score : 0,
            hand : []
        }
    }

    //Method to play the game will: pass out cards, take turns as long as players have cards,
    //  award points based off cards values and console.log winner.

    playGame(){

        //instantiate, create and shuffle the deck of cards
        const deck = new Deck

        deck.createDeck()
        deck.shuffleDeck()

        //Pass out cards to players using while loop, this loop PUSHES and also REMOVES
        // a card from the deck until there is no longer any cards in the deck.
        while(deck.deck.length !== 0){
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

        //for loop used to play the game after cards are handed out. Will run this loop until 
        //  players no longer have cards.
        for(let i =0; i < this.player1.hand.length; i++){
            //Award points to a player by comparing the cards values using if/else statements.
            if(this.player1.hand[i].value > this.player2.hand[i].value )
                {
                    //adds a point to the score of player 1 using ++ and console.logs the result.
                    this.player1.score ++
                    console.log(`
                    Player 1's Card: ${this.player1.hand[i].name} 
                        is greater than
                    Player 2's Card: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
                }
                else if ( this.player2.hand[i].value > this.player1.hand[i].value)
                    {
                    //adds a point to the score of player 2 using ++ and console.logs the result.    
                    this.player2.score ++
                    console.log(`
                    Player 2's Card: ${this.player2.hand[i].name} is greater than
                    Player 1's Card: ${this.player1.hand[i].name}
                    Player 2 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
                }
                //If there is a tie, there is no points added and just console.logs the result.
                else{
                    
                    console.log(`
                    Player 1's Card: ${this.player1.hand[i].name} 
                    Player 2's Card: ${this.player2.hand[i].name}
                    Tie! No points awarded...
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
                }

        }

        //declare a winner for the game after the loop run and there is a winner using an if else statement.

        if(this.player1.score > this.player2.score){
            console.log(`Player 1 wins!
            Final Score: P1: ${this.player1.score}
                        P2: ${this.player2.score}
            `)
        }
        else if(this.player2.score > this.player1.score){
            console.log(`Player 2 wins!
            Final Score: P1: ${this.player1.score}
                        P2: ${this.player2.score}
            `)
        }
        //console.log this result if there is a tie.
        else{console.log('It is a tie!')}
    }
}


//Finally, play the game by creating new game instance and calling the play method.

const game = new Game
game.playGame()
