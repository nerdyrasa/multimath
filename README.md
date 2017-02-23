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
        var scoreboard = function() {
      
        // private variables
      
        // functions
        function someFunction() {
      
        }
      
        return {
		  someFunction: someFunction      
        }
        }();
    - Constructor Function
      - Use the constructor naming convention and capitalize the name of the variable
      - Don't immediately execute.
      - New up as necessary.	
    	var Scoreboard = function() {
        // private variables
      
        // functions
        function someFunction() {
      
        }
      
        return {
		  someFunction: someFunction      
        }
        };
