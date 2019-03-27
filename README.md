Programming II 
API-assignment 
By Thanita (IDK17/IDK18)
27th March 2019

Chosen library: 
http://interactjs.io/ Drag and Drop

A word-finding game where the player is to find the randomely selected word, which is announced at the top left of the screen, and drags and drops it in the box in time.
The box is placed on the bottom of the screen and is not visible until the player grabs (clicks and holds) a word.

The time limit is set to 5 seconds per word and is shown by the color changing background. 
Instead of having a visible countdown, the background shifts from a calmer, lighter shade of red/pink to bright red.
The background is intended to gradually change color instead of fading smoothly, so it's easier for the player to be aware of each second that passes.

The player receives a point for each correct word dropped in the box in time. The scoreboard changes size and color for a second when increases. 
If the player doesn't answer in time, they lose a point. The score can pass under zero and be negative. The timer restarts as well as a new word is announced.
If the player places an incorrect word in the box, it's game over and the game restarts.

The player completes the game when there are no words left. The game restarts

All HTML, JavaScript, CSS codes are all in the same HTML file for easier __.
