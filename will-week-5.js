     import Plants from './Plants.js';
     import Help from './Help.js';
     let plant;


     window.setup = function() {
          createCanvas(400, 400);
          frameRate(20);
          textFont('Helvetica');
          textAlign(CENTER);
          textSize(40);
          plant = new Plants();
     }

     window.draw = function() {
          background("#C5D4BE");
          fill("#0C2833");
          noStroke();
          text("Click or Tap for Plants", 200, 200);
          plant.draw();
     }

     window.mousePressed = function() {
          plant.add(mouseX, mouseY);
     }