// Write your JavaScript code here.


window.addEventListener('load', function() {

    flightStatusText = document.getElementById("flightStatus");
    shutBackground = document.getElementById("shuttleBackground");
    shutHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.") === true){
            flightStatusText.innerHTML = "Shuttle in Flight";
            shutBackground.style.backgroundColor = "blue";
            let shuttleLift = parseInt(shutHeight.innerHTML);
            shuttleLift += 10000;
            shutHeight.innerHTML = shuttleLift;
        };

        landButton.addEventListener("click", function(event){
          
            flightStatusText.innerHTML = "The shuttle has landed.";
            shutBackground.style.backgroundColor = "green";
            shutHeight.innerHTML = 0;
            window.confirm("The shuttle has landed");
            event.stopPropagation();

        });

        abortButton.addEventListener("click", function(){
           if(window.confirm("Confirm that you want to abort the mission.") === true){
               flightStatusText.innerHTML = "Mission Aborted";
               shutBackground.style.backgroundColor = "green";
               shutHeight.innerHTML = 0;
           };
        })









    });


  });