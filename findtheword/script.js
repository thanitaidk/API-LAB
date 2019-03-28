var CountDown = 5; //countdown, starts with 5 seconds
var CurrentScore = 0; //counts score, starts with 0
var Counter = 5;


$(document).ready(function () {

        document.getElementById("Counter").innerHTML = CountDown;

        var Timer = setInterval(function () {
            CountDown--;
            document.getElementById("Counter").innerHTML = CountDown;
            if (CountDown == 0) {
                clearInterval(Timer);
                document.getElementById("Counter").style.opacity = "0";
                document.getElementById("Words").style.opacity = "1";
                document.getElementById("Points").style.opacity = "1";
                document.getElementById("demo").style.opacity = "1";

                Randomize();
                Pressure();
            }
        }, 1000);

        function Pressure() {
            var Press = setInterval(function () {  //the different shades for each second
                Counter--;
                console.log(Counter);
                if (Counter == 5) {
                    document.body.style.backgroundColor = "#FF4040";
                }
                if (Counter == 4) {
                    document.body.style.backgroundColor = "#FFB9B9";
                }
                if (Counter == 3) {
                    document.body.style.backgroundColor = "#FF9797";
                }
                if (Counter == 2) {
                    document.body.style.backgroundColor = "#FF6C6C";
                }
                if (Counter == 1) {
                    document.body.style.backgroundColor = "#E40000";
                }
                if (Counter == 0) {  //recounts, 0 = 5
                    document.body.style.backgroundColor = "#FFD1D1"; 
                    Counter = 5;
                    CurrentScore--;  //-1 score each time time's out
                    document.getElementById("Points").innerHTML = "Score: " + CurrentScore;

                    Randomize();
                }
            }, 1000);
        }

        function Randomize() {  //picks a random word from the array
            var rand = Array[Math.floor(Math.random() * Array.length)];
            document.getElementById("Words").innerHTML = rand;
        }


        function Refresh() {  //refreshing the website when game over/restarts
            setTimeout(function () {
                window.location = window.location
            }, 500);
        }


        interact('.dropzone').dropzone({ //dropzone only visible when interacting with a word
            accept: '.yes-drop',
            overlap: 0.1,  //atleast 10% overlap to work 

            //listen for drop related events
            ondropactivate: function (event) {
                event.target.classList.add('drop-active');
                document.querySelector(".dropzone").style.opacity = "1";
                document.queryCommandSupported(".dropzone")
                event.relatedTarget.style.fontSize = "30px"; //increases a bit in size when grabbed
            },
            ondragenter: function (event) { //when hovering over the dropzone
                var draggableElement = event.relatedTarget,
                    dropzoneElement = event.target;
                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
                document.querySelector(".dropzone").style.color = "white"; //checkmark color
                document.querySelector(".dropzone")
                event.relatedTarget.style.color = "white"; //changes color and size when hovering over the dropzone
                document.queryCommandSupported(".dropzone")
                event.relatedTarget.style.fontSize = "50px";
            },

            ondragleave: function (event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
                document.querySelector(".dropzone").style.color = "black"; //checkmark
                document.querySelector(".dropzone")
                event.relatedTarget.style.color = "black";
                document.queryCommandSupported(".dropzone")
                event.relatedTarget.style.fontSize = "100%";
            },
            ondrop: function (event) {
                if (event.relatedTarget.textContent == document.getElementById("Words").innerHTML) {  //if dragged word matches chosen word
                    Counter = 5;
                    ++CurrentScore;  //gain score
                    document.getElementById("Points").innerHTML = "Score: " + CurrentScore;
                    document.getElementById("Points").style.color = "lime"; //text changes color to light green for a sec when score increases
                    document.getElementById("Points").style.fontSize = "40px"; //changes size as well
                    event.relatedTarget.style.display = "none";
                    
                    Array = Array.filter(v => v !== document.getElementById("Words").innerHTML);

                    var fadeA = setTimeout(function () {
                        document.getElementById("Points").style.color = "blue"; //goes back to its original color and size
                        document.getElementById("Points").style.fontSize = "20px";

                        clearTimeout(fadeA);
                    }, 1000);
                    Randomize();

                    if (Array.length == 0) { //winning the game, all words have been cleared out 
                        alert("Congratulations, you beat the game!\nThank you for playing."); //closes tab
                        close();

                    }
                } else { //wrong answer
                    alert("Streak lost! Restarting game.."); //restarts
                    Refresh();
                }

            },

            ondropdeactivate: function (event) { // remove active dropzone feedback
                // event.target.classList.remove('drop-active');
                // event.target.classList.remove('drop-target');
                document.querySelector(".dropzone").style.opacity = "0";
            }
        });
        interact('.drag-drop')
            .draggable({
                inertia: true,
                restrict: {
                    endOnly: true,
                    elementRect: {
                        top: 0,
                        left: 0,
                        bottom: 1,
                        right: 1
                    }
                },
                autoScroll: false,
                onmove: dragMoveListener,
            });

        function dragMoveListener(event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }


        var Array = ['flm', 'net', 'float', 'java', 'abstract', 'else', 'switch', 'byte'];
        var str = Array.join(' ');
        var words = str.split(" "); //splitting the words with space between them
        var text, i;
        text = "";
        for (i = 0; i < words.length; i++) {
            text += "<div class='yes-drop drag-drop'>" + words[i] + "</div>";
        }
        text += "";
        document.getElementById("demo").innerHTML = text;
    });