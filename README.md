Programming II 
API assignment
By Thanita (IDK17/IDK18)
29th March 2019

Chosen library: 
http://interactjs.io/ Drag and Drop

A word-finding game where the player is to find the randomely selected word among other words, which is shown at the top left of the screen, drags and drops it in the box in time.
The box is placed on the bottom of the screen and is not visible until the player grabs (clicks and holds) a word.

The time limit is set to 5 seconds per word and is shown by the color changing background. 
Instead of having a visible countdown, the background shifts from a calmer, lighter shade of red/pink to bright red.
The background is intended to gradually change color instead of fading smoothly, so it's easier for the player to be aware of each second that passes.

The player receives a point for each correct word dropped in the box in time.
If the player doesn't answer in time, they lose a point. The timer restarts as well as a new word is selected and announced.
If the player places an incorrect word in the box, it's game over and the game restarts.

The player completes the game when there are no words left. The tab closes automatically.
