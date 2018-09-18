function fightMonster() {
    var monsterHealth = 10;
    var playerHealth = 10;
    var playersTurn = true;
    var monsterTurn = false;
    var defendSelf = false;
    var monsterSkip = false;
    var amuletUsed = false;
    var useAmulet = false;
    var monsterDefend = false;
    while(monsterHealth >= 1 && playerHealth >= 1) {
        if (playersTurn === true) {
            player();
        }
        if (monsterTurn === true) {
            monster();
        }  
    }
    function player() {
        var choice = parseInt(prompt("Players Current HP: " + playerHealth + "\nA monster attacks what do you do\n1 = Attack\n2 = Defend\n3 = Flee\n4 = Use Amulet"), 10);
        switch(choice) {
            case 1:
                attackMonster();
                break;
            case 2:
                defendingSelf();
                break;   
            case 3:
                attemptToFlee();
                break;
            case 4:
                usingAmulet();
                break;
        }
    }
    function monster() {
        var monsterChoice = Math.round(Math.random() * (0 - 0) + 1);
        switch(monsterChoice) {
            case 1:
                monsterAttack();
                break;    
        }
    }
    function attackMonster() {
        alert("You have attacked the monster");
        monsterHealth--;
        alert("The monster now has " + monsterHealth + " hp left");
        if (amuletUsed === true && useAmulet === true) {
            alert("Using the amulet has given you a second attack");
            monsterHealth--;
            useAmulet = false;
            alert("Monster has " + monsterHealth + " HP remaining");
        }
        playersTurn = false;
        monsterTurn = true;
        defendSelf = false;
    }
    function defendingSelf() {
        var chanceToDefend = Math.round(Math.random() * (9 - 0) + 1);
        if (defendSelf === false && chanceToDefend >= 6) {
            alert("You defend yourself");
            defendSelf = true;
            playersTurn = true;
            monsterSkip = true;
        }
        if (defendSelf === false && chanceToDefend <= 5) {
            alert("You fail to bring your sheild up");
            defendSelf = true;
            playersTurn = false;
            monsterTurn = true;
        }
    }
    function attemptToFlee() {
        alert("You attempt to flee!")
        var chanceToFlee = Math.round(Math.random() * (9 - 0) + 1);   
        if (chanceToFlee <= 6) {
            alert("The monster has stopped you from fleeing")
            playersTurn = false;
            monsterTurn = true;
        }  
        if (chanceToFlee >= 7) {
            alert("You successfully run away")
            monsterHealth = 0; 
        }
    }
    function usingAmulet() {
        if(amuletUsed === false && useAmulet === false) {
            amuletUsed = true;
            useAmulet = true;
            alert("You have used the amulet to give you an extra attack");
            playersTurn = true;
        }
        if(amuletUsed === true && useAmulet === false) {
            alert("You can only use this once per fight");
            playersTurn = true;
        }
    }
    function monsterAttack() {
        if (monsterSkip === false) {
            alert("THE MONSTER HAS ATTACKED YOU");
            playerHealth--;
            alert("You now have " + playerHealth + " hp left!")
            monsterTurn = false;
            playersTurn = true;
        }
        if (monsterSkip === true) {
            alert("THE MONSTER HAS ATTACKED YOU");
            alert("The monster swings and misses");
            monsterSkip = false;
            monsterTurn = false;
            playersTurn = true;
            defendSelf = false;
        }
    }
}