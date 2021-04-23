// Write your JavaScript code here.


window.addEventListener('load', function() {

    flightStatusText = document.getElementById("flightStatus");
    shutBackground = document.getElementById("shuttleBackground");
    shutHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton = document.getElementById("takeoff");

    takeOffButton.addEventListener("click", function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.") === true){
            flightStatusText.innerHTML = "Shuttle in Flight";
            shutBackground.style.backgroundColor = "blue";
            let shuttleLift = parseInt(shutHeight.innerHTML);
            shuttleLift += 10000;
            shutHeight.innerHTML = shuttleLift;

        };
    });


  });