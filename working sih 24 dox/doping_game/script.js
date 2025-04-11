// Get elements
const startCard = document.getElementById('start-card');
const bootcampCard = document.getElementById('bootcamp-card');
const pushupCard = document.getElementById('pushup-card');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const performanceStats = document.getElementById('performance-stats');
const healthDisplay = document.getElementById('health');
const performanceDisplay = document.getElementById('performance');
const reputationDisplay = document.getElementById('reputation');

// Variables to hold the performance stats
let health = 40;
let performance = 40;
let reputation = 40;
let gameOver = false;

// Function to update the performance stats display
function updatePerformanceStats() {
    document.getElementById('health').textContent = `Health: ${health}`;
    document.getElementById('performance').textContent = `Performance: ${performance}`;
    document.getElementById('reputation').textContent = `Reputation: ${reputation}`;
    
    // Check if the game is over

    if (checkGameOver()) {
        gameOver = true; // Set gameOver flag
        return; // Prevent further actions
    }
}

// Function to check if the game is over
function checkGameOver() {
    if (health < 10) {
        endGame("You were hospitalized due to excessive workload.");
        return true;
    } else if (reputation <= 0) {
        endGame("You were kicked out of the team due to low reputation.");
        return true;
    } else if (performance <= 0) {
        endGame("You didn't hit the mark :(");
        return true;
    }
    return false; // Game continues
}

// Function to handle the end of the game
function endGame(message) {
    document.getElementById('game-over-message').textContent = message;
    transitionToNextCard(document.querySelector('.card.show').id, 'game-over-card');
}


// Function to handle the transition between cards
function transitionToNextCard(currentCardId, nextCardId) {
    if (gameOver) return; // Prevent transition if game is over

    const currentCard = document.getElementById(currentCardId);
    const nextCard = document.getElementById(nextCardId);

    currentCard.classList.remove('show');
    
    setTimeout(() => {
        currentCard.classList.add('hidden');
        nextCard.classList.remove('hidden');
        setTimeout(() => {
            nextCard.classList.add('show');
        }, 10);
    }, 500); // Match this with the transition duration in CSS
}


// Restart the game
document.getElementById('restart-button').addEventListener('click', function() {
    health = 40;
    performance = 40;
    reputation = 40;
    updatePerformanceStats();
    transitionToNextCard('game-over-card', 'start-card');
});

// Event listeners for start choices
document.getElementById('yes-start-button').addEventListener('click', function() {
    transitionToNextCard('start-card', 'bootcamp-card');
});

document.getElementById('no-start-button').addEventListener('click', function() {
    endGame("You decided not to pursue an athletic career.");
});

// Event listeners for bootcamp choices
document.getElementById('yes-bootcamp-button').addEventListener('click', function() {
    performance += 3;
    reputation += 1;
    health -= 4;
    updatePerformanceStats();
    transitionToNextCard('bootcamp-card', 'pushup-card');
});

document.getElementById('no-bootcamp-button').addEventListener('click', function() {
    health += 1;
    reputation -= 2;
    performance -= 3;
    updatePerformanceStats();
    transitionToNextCard('bootcamp-card', 'noRunpushup-card');
});

// Event listeners for pushup choices (You can implement these as needed)
document.getElementById('yes-pushup-button').addEventListener('click', function() {
    performance += 4;
    reputation += 2;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('pushup-card', 'match-card');
});

document.getElementById('no-pushup-button').addEventListener('click', function() {
    health += 2;
    reputation -= 3;
    performance -= 2;
    updatePerformanceStats();
    transitionToNextCard('pushup-card', 'match-card');
});
document.getElementById('yes-noRunpushup-button').addEventListener('click', function() {
    performance += 4;
    reputation += 2;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('noRunpushup-card', 'match-card');
});

document.getElementById('no-noRunpushup-button').addEventListener('click', function() {
    health += 2;
    reputation -= 3;
    performance -= 2;
    updatePerformanceStats();
    transitionToNextCard('noRunpushup-card', 'match-card');
});

// Match-Day
document.getElementById('yes-match-button').addEventListener('click', function() {
    performance -= 1;
    reputation -= 10;
    health += 5;
    updatePerformanceStats();
    transitionToNextCard('match-card', 'striker-card');
});

document.getElementById('no-match-button').addEventListener('click', function() {
    health -= 5;
    reputation += 5;
    performance += 1;
    updatePerformanceStats();
    transitionToNextCard('match-card', 'mid-card');
});
//striker
document.getElementById('yes-striker-button').addEventListener('click', function() {
    performance += 1;
    reputation += 5;
    health -= 2;
    updatePerformanceStats();
    transitionToNextCard('striker-card', 'pass-card');
});

document.getElementById('no-striker-button').addEventListener('click', function() {
    health -= 2;
    reputation -= 5;
    performance += 1;
    updatePerformanceStats();
    transitionToNextCard('striker-card', 'goal-card');
});
//goal
document.getElementById('yes-goal-button').addEventListener('click', function() {
    transitionToNextCard('goal-card', 'injury-card');
});
document.getElementById('no-goal-button').addEventListener('click', function() {
    transitionToNextCard('goal-card', 'subsi-card');
});
// pass
document.getElementById('yes-pass-button').addEventListener('click', function() {
    transitionToNextCard('pass-card', 'injury-card');
});
document.getElementById('no-pass-button').addEventListener('click', function() {
    transitionToNextCard('pass-card', 'subsi-card');
});
//mid 
document.getElementById('yes-mid-button').addEventListener('click', function() {
    performance -= 2;
    reputation -= 4;
    health -= 1;
    updatePerformanceStats();
    transitionToNextCard('mid-card', 'slide-card');
});

document.getElementById('no-mid-button').addEventListener('click', function() {
    health -= 1;
    reputation += 3;
    performance += 2;
    updatePerformanceStats();
    transitionToNextCard('mid-card', 'shoulder-card');
});
//slide
document.getElementById('yes-slide-button').addEventListener('click', function() {
    transitionToNextCard('slide-card', 'subsi-card');
});
document.getElementById('no-slide-button').addEventListener('click', function() {
    endGame("Guess you took the card too personally!");
});
//shoulder
document.getElementById('yes-shoulder-button').addEventListener('click', function() {
    transitionToNextCard('shoulder-card', 'injury-card');
});
document.getElementById('no-shoulder-button').addEventListener('click', function() {
    transitionToNextCard('shoulder-card', 'subsi-card');
});
//subsi
document.getElementById('yes-subsi-button').addEventListener('click', function() {
    transitionToNextCard('subsi-card', 'command-card');
});
document.getElementById('no-subsi-button').addEventListener('click', function() {
    endGame("You were never seen on the playing field again");
});
document.getElementById('yes-injury-button').addEventListener('click', function(){
    health -=2;
    reputation -=7;
    performance -= 1;
    updatePerformanceStats();
    transitionToNextCard('injury-card', 'sitout-card');
});
document.getElementById('yes-sitout-button').addEventListener('click', function(){
    transitionToNextCard('sitout-card', 'command-card');
});
document.getElementById('no-sitout-button').addEventListener('click', function(){
    endGame("You couldn't handle the pressure");
});
document.getElementById('no-injury-button').addEventListener('click', function(){
    health -=8;
    reputation += 8;
    performance -= 4;
    updatePerformanceStats();
    transitionToNextCard('injury-card', 'continuePlay-card');
});
document.getElementById('yes-continuePlay-button').addEventListener('click', function(){
    transitionToNextCard('continuePlay-card', 'command-card');
});
document.getElementById('no-continuePlay-button').addEventListener('click', function(){
    endGame("You Gave up");
});
document.getElementById('yes-command-button').addEventListener('click', function(){
    transitionToNextCard('command-card', 'train-card');
});
document.getElementById('no-command-button').addEventListener('click', function(){
    endGame("You Gave up");
});
document.getElementById('yes-train-button').addEventListener('click', function() {
    performance += 4;
    reputation += 3;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('train-card', 'donut-card');
});

document.getElementById('no-train-button').addEventListener('click', function() {
    health += 4;
    reputation -= 3;
    performance -= 3;
    updatePerformanceStats();
    transitionToNextCard('train-card', 'donut-card');
});
document.getElementById('yes-donut-button').addEventListener('click', function() {
    performance -= 2;
    reputation -= 3;
    health += 4;
    updatePerformanceStats();
    transitionToNextCard('donut-card', 'newTrain-card');
});

document.getElementById('no-donut-button').addEventListener('click', function() {
    health -= 3;
    reputation += 3;
    performance += 2;
    updatePerformanceStats();
    transitionToNextCard('donut-card', 'newTrain-card');
});
document.getElementById('yes-newTrain-button').addEventListener('click', function() {
    performance += 4;
    reputation += 3;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('newTrain-card', 'Rest-card');
});

document.getElementById('no-newTrain-button').addEventListener('click', function() {
    health += 4;
    reputation -= 3;
    performance -= 3;
    updatePerformanceStats();
    transitionToNextCard('newTrain-card', 'Rest-card');
});
document.getElementById('yes-Rest-button').addEventListener('click', function() {
    performance -= 2;
    reputation += 2;
    health += 6;
    updatePerformanceStats();
    transitionToNextCard('Rest-card', 'newTraining-card');
});

document.getElementById('no-Rest-button').addEventListener('click', function() {
    health -= 6;
    reputation += 6;
    performance += 2;
    updatePerformanceStats();
    transitionToNextCard('Rest-card', 'newTraining-card');
});
document.getElementById('yes-newTraining-button').addEventListener('click', function() {
    performance += 3;
    reputation += 3;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('newTraining-card', 'Party-card');
});

document.getElementById('no-newTraining-button').addEventListener('click', function() {
    health += 4;
    reputation -= 3;
    performance -= 3;
    updatePerformanceStats();
    transitionToNextCard('newTraining-card', 'Party-card');

});
document.getElementById('yes-Party-button').addEventListener('click', function() {
    performance -= 5;
    reputation += 8;
    health -= 3;
    updatePerformanceStats();
    transitionToNextCard('Party-card', 'yesParty-card');
});

document.getElementById('no-Party-button').addEventListener('click', function() {
    health += 4;
    reputation -= 10;
    performance += 3;
    updatePerformanceStats();
    transitionToNextCard('Party-card', 'noParty-card');

});

document.getElementById('no-noParty-button').addEventListener('click', function() {
    endGame("The compliments were too much for you");
});
document.getElementById('yes-noParty-button').addEventListener('click', function() {
    health += 6;
    reputation += 4;
    performance += 6;
    updatePerformanceStats();
    transitionToNextCard('noParty-card', 'apple-card');
});
document.getElementById('no-yesParty-button').addEventListener('click', function() {
    endGame("The Humiliation was too much for you");
});
document.getElementById('yes-yesParty-button').addEventListener('click', function() {
    health -= 6;
    reputation -= 4;
    performance -= 6;
    updatePerformanceStats();
    transitionToNextCard('yesParty-card', 'apple-card');
});
document.getElementById('yes-apple-button').addEventListener('click', function() {
    performance += 1;
    reputation -= 3;
    health += 4;
    updatePerformanceStats();
    transitionToNextCard('apple-card', 'hardTrain-card');
});

document.getElementById('no-apple-button').addEventListener('click', function() {
    health -= 3;
    reputation += 3;
    performance -= 2;
    updatePerformanceStats();
    transitionToNextCard('apple-card', 'hardTrain-card');
});
document.getElementById('yes-hardTrain-button').addEventListener('click', function() {
    performance += 10;
    reputation += 5;
    health -= 6;
    updatePerformanceStats();
    transitionToNextCard('hardTrain-card', 'dissapointed-card');
});

document.getElementById('no-hardTrain-button').addEventListener('click', function() {
    health += 5;
    reputation -= 3;
    performance -= 2;
    updatePerformanceStats();
    transitionToNextCard('hardTrain-card', 'dissapointed-card');
});
document.getElementById('yes-dissapointed-button').addEventListener('click', function(){
    transitionToNextCard('dissapointed-card', 'lockerRoom-card');
});
document.getElementById('no-dissapointed-button').addEventListener('click', function(){
    endGame("You never made it to the locker room, instead you headed straight for the academy gates only to never look back");
});
document.getElementById('yes-lockerRoom-button').addEventListener('click', function(){
    health -= 15;
    reputation -= 25;
    performance = 76;
    updatePerformanceStats();
    transitionToNextCard('lockerRoom-card', 'Effect-card');
});

document.getElementById('no-lockerRoom-button').addEventListener('click', function(){
    health += 5;
    reputation += 15;
    performance += 4;
    updatePerformanceStats();
    transitionToNextCard('lockerRoom-card', 'NoEffect-card');
});

//Effect
document.getElementById('yes-Effect-button').addEventListener('click', function(){
    transitionToNextCard('Effect-card', 'dopedResult-card');
});
document.getElementById('no-Effect-button').addEventListener('click', function(){
    endGame("You never made it to the the trials");
});
//NoEffect
document.getElementById('yes-NoEffect-button').addEventListener('click', function(){
    transitionToNextCard('NoEffect-card', 'realResult-card');
});
document.getElementById('no-NoEffect-button').addEventListener('click', function(){
    endGame("You never made it to the the trials");
});
//Doped Result
document.getElementById('yes-dopedResult-button').addEventListener('click', function(){
    transitionToNextCard('dopedResult-card', 'dopedMonth-card');
});
document.getElementById('no-dopedResult-button').addEventListener('click', function(){
    endGame("You got scared by your failing health and the fear of being caught so you felt");
});
//Undoped Result
document.getElementById('yes-realResult-button').addEventListener('click', function(){
    transitionToNextCard('realResult-card', 'realMonth-card');
});
document.getElementById('no-realResult-button').addEventListener('click', function(){
    endGame("You lacked patience and decided subsitute wasn't good enough");
});
//DopedMonth
document.getElementById('yes-dopedMonth-button').addEventListener('click', function(){
    endGame("The lesson here is that taking shortcuts for short term gains will always extract its tool later in your journey, while doing the right things might be painful in the begining but will always reward you, take the difficult path, take the right path!");
});
document.getElementById('no-dopedMonth-button').addEventListener('click', function(){
    endGame("The lesson here is that taking shortcuts for short term gains will always extract its tool later in your journey, while doing the right things might be painful in the begining but will always reward you, take the difficult path, take the right path!");
});
//RealMonth
document.getElementById('yes-realMonth-button').addEventListener('click', function(){
    endGame("The lesson here is that taking shortcuts for short term gains will always extract its tool later in your journey, while doing the right things might be painful in the begining but will always reward you, take the difficult path, take the right path!");
});
document.getElementById('no-realMonth-button').addEventListener('click', function(){
    endGame("The lesson here is that taking shortcuts for short term gains will always extract its tool later in your journey, while doing the right things might be painful in the begining but will always reward you, take the difficult path, take the right path!");
});
