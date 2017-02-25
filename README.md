# JavaScript Module Fundamentals

Basics of writing modular, maintainable JavaScript using popular formats, loaders, and bundlers.

## Goals of Modularity

 1. Create Higher-Level Abstraction
 2. Encapsulation
 3. Reusability
 4. Simplify dependency management.

## Module Patterns in ES5

1. Immediately-Invoked Function Expression (IIFE)
  * Anonymous function
  * Invoked when declared
  * Provides encapsulation
  * Reduces global scope pollution
  * (function(){})(); or (function(){}());
  * No dependency management
  
2. Revealing Module Pattern
  * Function scoping provides encapsulation
  * Adds one value to global scope per module
  * Clear delineation between private implementation and public API
  * No dependency management
  * Pure JS that works in modern browsers and doesn't required 3rd party libraries
  * Comes in two popular flavors
    - Singleton
        ```javascript
        var scoreboard = function() {
      
          // private variables
      
          // functions
          function someFunction() {
      
          }
      
          return {
		    someFunction: someFunction      
          }
        }();
        ```
    - Constructor Function
      - Use the constructor naming convention and capitalize the name of the variable
      - Don't immediately execute.
      - New up as necessary.	
    	```javascript
    	var Scoreboard = function() {
          // private variables
      
          // functions
          function someFunction() {
      
          }
      
          return {
		    someFunction: someFunction      
          }
        };
		```
		
## Module Formats and Loaders

### Overview
  - Module formats
    * Native vs. non-native
    * Asynchronous Module Definition (AMD)
    * CommonJS
  - Module loaders
    * Load AMD modules with RequireJS (you can also use Curl.js and SystemJS)
    * Load CommonJS modules with SystemJS

### Formats Versus Loaders
  - Module Format -> Syntax
  - Module Loader -> Execute
  
### Module Formats
  - AMD -> browser
  - CommonJS -> node
  - UMD -> both browser and node
  - System.register -> SystemJS
  - The formats above are "non-native"
  - ES2015 -> Native format; Requires transpilation
  
### Module Loaders
  - RequireJS (AMD)
  
### Syntax for AMD Format
  
  ```
  // game.js
  define(['./player'], function(player) {
	
	// The API that exposes functions is in the return
	return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
  
  });
  ```
  
### CommonJS Format
  ```
  // game.js
  var player = require('./player.js');
 
#### Export Syntax  
  
  exports.printGame = printGame;
  ```
  
  module.exports === exports
  
  exports.calculateScore = calculateScore;
  
  same as:
  
  module.exports.calculateScore = calculateScore;
  
### Summary of AMD modules with RequireJS vs. CommonJS modules with SystemJS

 * AMD modules with RequireJS are more typically used in browser
 * CommonJS modules with SystemJS are more typically used on the server (Node)
  