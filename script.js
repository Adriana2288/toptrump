// Animal Class

class Animal {
    constructor(weight, height, health, strength, evilness) {
        this.weight = weight;
        this.height = height;
        this.health = health;
        this.strength = strength;
        this.evilness = evilness;
    }
};

// Player Class

class Player {
    constructor(totalScore, statScore1, statScore2, statScore3, statScore4, statScore5) {
        this.totalScore = totalScore;
        this.statScore1 = statScore1;
        this.statScore2 = statScore2;
        this.statScore3 = statScore3;
        this.statScore4 = statScore4;
        this.statScore5 = statScore5;
    }
};

// Creating two players

let player1 = new Player(0,0,0,0,0,0);
let player2 = new Player(0,0,0,0,0,0);
let totalNumberOfCards = 0;

const clickGameButtons = () => {

    // Generating random number from 1 - 100 for each stats

    let randomWeight = Math.floor(Math.random() * 100) +1;
    let randomHeight = Math.floor(Math.random() * 100) +1;
    let randomHealth = Math.floor(Math.random() * 100) +1;
    let randomStrength = Math.floor(Math.random() * 100) +1;
    let randomEvilness = Math.floor(Math.random() * 100) +1;

    // Create animals with generated stats 

    let animalPlayer1 = new Animal (randomWeight, randomHeight, randomHealth, randomStrength, randomEvilness);
    let animalPlayer2 = new Animal (randomWeight, randomHeight, randomHealth, randomStrength, randomEvilness);

    // Assigning the generated random values to the parameters statScores

    player1.statScore1 = animalPlayer1.randomWeight;
    player1.statScore1 = animalPlayer1.randomHeight; 
    player1.statScore1 = animalPlayer1.randomHealth;
    player1.statScore1 = animalPlayer1.randomStrength;
    player1.statScore1 = animalPlayer1.randomEvilness;

    player2.statScore1 = animalPlayer2.randomWeight;
    player2.statScore1 = animalPlayer2.randomHeight; 
    player2.statScore1 = animalPlayer2.randomHealth;
    player2.statScore1 = animalPlayer2.randomStrength;
    player2.statScore1 = animalPlayer2.randomEvilness;

// Summing up total scores .. pending


    
}

clickGameButtons();