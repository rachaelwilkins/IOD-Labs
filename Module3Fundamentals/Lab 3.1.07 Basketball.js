// 3.1.07 - Basketball Game

// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works.
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
    this.score++;
    return this 
    },
    foul() {
    this.fouls++;
    return this 
    },
    basket() {
    this.score += 2;
    return this 
    },
    threePointer() {
    this.score += 3;
    return this 
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    return this 
    },
    fullTime() {
    console.log('Fulltime score is '+this.score);
    return this 
    }    
    }
    
    basketballGame.basket().freeThrow().foul().freeThrow().basket().threePointer().foul().basket().halfTime().basket().basket().basket().foul().fullTime()

   
    