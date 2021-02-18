var playerName = window.prompt("What is your robot's name?");


var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");


var playerHealth = 10;
if(playerHealth === 0) {
    console.log("This will not run.");
}

else{
    console.log("This will run instead.");
}

var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alerts players that they're starting the game //
    window.alert("Welcome to Robot Gladiators!");
};

fight(); {
    // Subtract the value of playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    // check enemy's health 
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    // Log resluting message to console so we know it worked 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health 
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else (playerHealth + " still has " + playerHealth + "health left.");
    }