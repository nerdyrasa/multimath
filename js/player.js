// Using AMD Format with RequireJS

define([], function() {

    console.log('Creating a player...');

    // private members
    var playerName = '';

    function logPlayer() {
        console.log('The current player is ' + playerName + '.');
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };

});