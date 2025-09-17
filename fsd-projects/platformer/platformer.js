$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
   toggleGrid();
createPlatform(200,650,100,50, "red");
createPlatform(400,600,100,50, "red", 400,600,1);
createPlatform(605,100,100,350, "white");
createPlatform(605,550,100,100,"white");
createPlatform(800,650,50,25, "red");
createPlatform(980,500,50,50,"red");

    // TODO 3 - Create Collectables
createCollectable("steve",500,500,10,1);
createCollectable("steve",800,50,2,1);
createCollectable("max",1050,50,2,1);


    
    // TODO 4 - Create Cannons
createCannon("top", 800,800);
createCannon("left", 600,209);
createCannon("right",800,0);
createCannon("top", 500,800);
createCannon("bottom", 500, 700);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
