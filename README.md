Description:
  This was an assignment to build a crystal counting game.  The game assigns a random “target” number.  The user then clicks on one of 4 crystals to add a specific number of points to a counter.  The value of the crystals is not displayed.  If the user can match the target number exactly, the user wins.  If the user goes over the target amount, they lose.   The game keeps track of wins and losses until the game is restarted by refreshing the screen.

Languages Used:
  HTML, CSS, Bootstrap, JavaScript, and jQuery


Takeaways:
  The syntax of jQuery is still quite new to me and I struggled a bit, but I can see the advantage of the reduced amount of code.  


Feedback:
  I ran into some problems with the reset function on the “Total Crystal Score”.  When the initial game was won or lost, the “Total Crystal Score Number” on the screen would zero out for the next game, but there was still a value attached to it, so when you started the next game, the value of the crystal clicked would be added to the value of the previous game.
I spent a significant amount of time on this problem, but the main issue turned out to be that there was some confusion between the class and ID assigned to “Total Crystal Score” in the reset function.  The simplest solution was to delete the ID, since a change to layout made it no longer necessary.  

