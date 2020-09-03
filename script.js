/* global strokeWeight, createCanvas,textSize,  colorMode, HSB, background, rect, mouseX, mouseY, tint, text, stroke, fill, random, height, width, ellipse, mouseIsPressed, line, loadFont, noFill, keyCode, keyIsDown, charAt, createDiv */

let key,
  typeWriterFont,
  letter,
  textFont,
  rotor1,
  rotor2,
  rotor3,
  temp1,
  temp2,
  keyboard,
  tempLet,
  usingRotor1,
  usingRotor2,
  usingRotor3,
  order1,
  order2,
  order3,
  alphabet,
  reflectorA,
  modifyAlphabetRotor3,
  result,
  modifyAlphabetRotor2,
  modifyAlphabetRotor1,
  checkResult,
  reflectorB,
  reflectorC,
  rotorOrder1,
  rotorOrder2,
  rotorOrder3,
  UsingReflector,
  rotorKeep1,
  rotorKeep2,
  rotorKeep3;

function setup() {
  // Canvas & color settings
  createCanvas(615, 600);
  colorMode(HSB);
  keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM";
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  modifyAlphabetRotor3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  modifyAlphabetRotor2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  modifyAlphabetRotor1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rotor1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  rotor2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  rotor3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  rotorKeep1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  rotorKeep2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  rotorKeep3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  reflectorA = "EJMZALYXVBWFCRQUONTSPIKHGD";
  reflectorB = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
  reflectorC = "FVPJIAOYEDRZXWGCTKUQSBNMHL";
  rotorOrder1 = 0;
  rotorOrder2 = 0;
  rotorOrder3 = 0;
  letter = new Letter();
}

function draw() {
  background(136, 0, 30);
  letter.display();
  //letter.press();
  DisplayRotors();
  Rotors();
}

class Letter {
  constructor() {
    this.x = 90;
    this.y = 300;
    this.r = 30;
    this.color = 0;
  }
  display() {
    for (let i = 0; i < 500; i = i + 50) {
      //Creates the circles on the top row
      fill(this.color);
      ellipse(this.x + i, this.y, this.r);
      fill(100);
      textSize(12);
      //Top row Keyboard
      text("Q", 85, 304);
      text("W", 134.5, 304);
      text("E", 186, 304);
      text("R", 235, 304);
      text("T", 286, 304);
      text("Y", 335.7, 304);
      text("U", 386, 304);
      text("I", 438, 304);
      text("O", 485, 304);
      text("P", 535, 304);
    }
    for (let i = 0; i < 450; i = i + 50) {
      //creates Circles on middle row
      fill(this.color);
      ellipse(this.x + i + 25, this.y + 50, this.r);
      //Middle row keyboard
      fill(100);
      textSize(12);
      text("A", 111, 354);
      text("S", 161, 354);
      text("D", 211, 354);
      text("F", 261, 354);
      text("G", 310.5, 354);
      text("H", 361, 354);
      text("J", 412, 354);
      text("K", 460.5, 354);
      text("L", 511, 354);
    }
    for (let i = 0; i < 350; i = i + 50) {
      fill(this.color);
      ellipse(this.x + i + 70, this.y + 100, this.r);
      //Bottom row
      fill(100);
      textSize(12);
      text("Z", 156, 404);
      text("X", 206, 404);
      text("C", 256, 404);
      text("V", 306, 404);
      text("B", 356, 404);
      text("N", 406, 404);
      text("M", 455, 404);
    }
  }
}

function Rotors() {
  if (
    rotorOrder3 != 0 &&
    rotorOrder2 != 0 &&
    rotorOrder1 != 0 &&
    UsingReflector != undefined &&
    result != undefined
  ) {
    //Writes the letter on the rotor
    fill(0);
    textSize(12);
    text(`${rotor1[0]}`, 156, 205);

    //Writes the letter on second rotor
    fill(0);
    textSize(12);
    text(`${rotor2[0]}`, 306, 205);

    //Writes the letter on third rotor
    fill(0);
    textSize(12);
    text(`${rotor3[0]}`, 456, 205);

    //Shows how to shift characters
    textSize(10);
    //Third Rotor
    text("Up Arrow to shift back", 410, 145);
    text("Down Arrow to shift forward", 410, 265);

    //Second Rotor
    text("Pg Up to shift back", 268, 145);
    text("Pg Down to shift forward", 260, 265);

    text("- to shift back", 130, 145);
    text("+ to shift forward", 125, 265);

    checkResult = keyboard.indexOf(result);
    if (checkResult <= 9 && (keyCode >= 65 && keyCode <= 90)) {
      fill(100);
      ellipse(90 + 50 * checkResult, 300, 30);
    } else if (
      checkResult > 9 &&
      checkResult <= 18 &&
      (keyCode >= 65 && keyCode <= 90)
    ) {
      fill(100);
      ellipse(115 + 50 * (checkResult % 10), 350, 30);
    } else if (
      checkResult >= 19 &&
      checkResult <= 25 &&
      (keyCode >= 65 && keyCode <= 90)
    ) {
      checkResult -= 19;
      fill(100);
      ellipse(160 + 50 * checkResult, 400, 30);
    }
  }
}

function keyPressed() {
  if (
    rotorOrder3 != 0 &&
    rotorOrder2 != 0 &&
    rotorOrder1 != 0 &&
    UsingReflector != undefined
  ) {
    if ((keyCode >= 65 && keyCode <= 90) || keyCode === 40) {
      //Puts the first character to the last
      if (keyCode != 40) {
        //The ciphering of the letter
        temp2 = rotor3[keyCode % 65];
        temp2 = modifyAlphabetRotor3.indexOf(temp2);
        temp2 = rotor2[temp2];
        temp2 = modifyAlphabetRotor2.indexOf(temp2);
        temp2 = rotor1[temp2];
        temp2 = modifyAlphabetRotor1.indexOf(temp2);
        temp2 = alphabet[temp2];
        temp2 = UsingReflector.indexOf(temp2);
        temp2 = modifyAlphabetRotor1[temp2];
        temp2 = rotor1.indexOf(temp2);
        temp2 = modifyAlphabetRotor2[temp2];
        temp2 = rotor2.indexOf(temp2);
        temp2 = modifyAlphabetRotor3[temp2];
        temp2 = rotor3.indexOf(temp2);
        result = alphabet[temp2];
      }
      //Shifts the rotor by 1 to the left if the current one reaches a certain letter
      if (rotor3[0] == "V") {
        tempLet = rotor2[0];
        rotor2 = rotor2.slice(1);
        rotor2 = rotor2.concat(tempLet);
        tempLet = modifyAlphabetRotor2[0];
        modifyAlphabetRotor2 = modifyAlphabetRotor2.slice(1);
        modifyAlphabetRotor2 = modifyAlphabetRotor2.concat(tempLet);
      }
      if (rotor2[0] == "E") {
        tempLet = rotor1[0];
        rotor1 = rotor1.slice(1);
        rotor1 = rotor1.concat(tempLet);
        tempLet = modifyAlphabetRotor1[0];
        modifyAlphabetRotor1 = modifyAlphabetRotor1.slice(1);
        modifyAlphabetRotor1 = modifyAlphabetRotor1.concat(tempLet);
      }
      //Rotates the third rotor automatically
      tempLet = rotor3[0];
      rotor3 = rotor3.slice(1);
      rotor3 = rotor3.concat(tempLet);
      tempLet = modifyAlphabetRotor3[0];
      modifyAlphabetRotor3 = modifyAlphabetRotor3.slice(1);
      modifyAlphabetRotor3 = modifyAlphabetRotor3.concat(tempLet);
    }
    if (keyCode == 38) {
      //If you want to go back up
      tempLet = rotor3.charAt(rotor3.length - 1);
      rotor3 = rotor3.slice(0, -1);
      rotor3 = tempLet.concat(rotor3);

      tempLet = modifyAlphabetRotor3.charAt(modifyAlphabetRotor3.length - 1);
      modifyAlphabetRotor3 = modifyAlphabetRotor3.slice(0, -1);
      modifyAlphabetRotor3 = tempLet.concat(modifyAlphabetRotor3);
    }
    if (keyCode == 33) {
      //Shifts the 2 rotor back
      tempLet = rotor2.charAt(rotor2.length - 1);
      rotor2 = rotor2.slice(0, -1);
      rotor2 = tempLet.concat(rotor2);

      tempLet = modifyAlphabetRotor2.charAt(modifyAlphabetRotor2.length - 1);
      modifyAlphabetRotor2 = modifyAlphabetRotor2.slice(0, -1);
      modifyAlphabetRotor2 = tempLet.concat(modifyAlphabetRotor2);
    }
    if (keyCode == 34) {
      //shifts the second rotor forward
      tempLet = rotor2[0];
      rotor2 = rotor2.slice(1);
      rotor2 = rotor2.concat(tempLet);
      tempLet = modifyAlphabetRotor2[0];
      modifyAlphabetRotor2 = modifyAlphabetRotor2.slice(1);
      modifyAlphabetRotor2 = modifyAlphabetRotor2.concat(tempLet);
    }
    if (keyCode == 189) {
      //Shifts the first rotor back
      tempLet = rotor1.charAt(rotor1.length - 1);
      rotor1 = rotor1.slice(0, -1);
      rotor1 = tempLet.concat(rotor1);

      tempLet = modifyAlphabetRotor1.charAt(modifyAlphabetRotor1.length - 1);
      modifyAlphabetRotor1 = modifyAlphabetRotor1.slice(0, -1);
      modifyAlphabetRotor1 = tempLet.concat(modifyAlphabetRotor1);
    }
    if (keyCode == 187) {
      //shifts the first rotor forward
      tempLet = rotor1[0];
      rotor1 = rotor1.slice(1);
      rotor1 = rotor1.concat(tempLet);
      tempLet = modifyAlphabetRotor1[0];
      modifyAlphabetRotor1 = modifyAlphabetRotor1.slice(1);
      modifyAlphabetRotor1 = modifyAlphabetRotor1.concat(tempLet);
    }
  }
}

function DisplayRotors() {
  if (result != undefined) {
    textSize(50);
    fill(100);
    text(`${result}`, 290, 500);
  }

  //First rotor
  fill(95);
  rect(150, 150, 20, 100);
  line(150, 190, 170, 190);
  line(150, 210, 170, 210);

  //Second Rotor
  rect(300, 150, 20, 100);
  line(300, 190, 320, 190);
  line(300, 210, 320, 210);

  //Third Rotor
  rect(450, 150, 20, 100);
  line(450, 190, 470, 190);
  line(450, 210, 470, 210);

  // Selecting the Rotor Position
  if (rotorOrder1 == 0) {
    fill(218, 45, 100);
    rect(50, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Rotor I", 65, 78);
  }
  //Same thing
  if (rotorOrder2 == 0) {
    fill(218, 45, 100);
    rect(200, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Rotor II", 215, 78);
  }
  //again..
  if (rotorOrder3 == 0) {
    fill(218, 45, 100);
    rect(350, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Rotor III", 364, 78);
  }

  //Tells how to pick the rotors
  if (rotorOrder3 == 0 && rotorOrder2 == 0 && rotorOrder1 == 0) {
    textSize(30);
    text("Pick the order of the rotors", 130, 30);
  }

  //Tells how to pick reflector
  if (
    rotorOrder3 != 0 &&
    rotorOrder2 != 0 &&
    rotorOrder1 != 0 &&
    UsingReflector == undefined
  ) {
    textSize(30);
    text("Pick the reflector", 190, 30);

    fill(218, 45, 100);
    rect(50, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Reflector A", 55, 78);

    fill(218, 45, 100);
    rect(200, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Reflector B", 205, 78);

    fill(218, 45, 100);
    rect(350, 50, 70, 50);
    textSize(12);
    fill(0);
    text("Reflector C", 354, 78);
  }

  //Reset Button
  fill(4, 100, 100);
  rect(500, 50, 70, 50);
  fill(0);
  textSize(12);
  text("Reset", 519, 78);
}

function mousePressed() {
  //Click on the first box and assign the corrisponding info
  if (mouseX > 50 && mouseX < 120 && mouseY > 50 && mouseY < 100) {
    if (
      rotorOrder1 != 0 &&
      rotorOrder2 != 0 &&
      rotorOrder3 != 0 &&
      UsingReflector == undefined
    ) {
      UsingReflector = reflectorA;
    } else if (rotorOrder2 == 0 && rotorOrder3 == 0) {
      rotorOrder1 = 1;
      rotor1 = rotorKeep1;
    } else if (rotorOrder2 != 0 && rotorOrder3 != 0) {
      rotorOrder1 = 3;
      rotor3 = rotorKeep1;
    } else {
      rotorOrder1 = 2;
      rotor2 = rotorKeep1;
    }
  }
  //Click on the second box and assign the corrisponding info
  if (mouseX > 200 && mouseX < 270 && mouseY > 50 && mouseY < 100) {
    if (
      rotorOrder1 != 0 &&
      rotorOrder2 != 0 &&
      rotorOrder3 != 0 &&
      UsingReflector == undefined
    ) {
      UsingReflector = reflectorB;
    } else if (rotorOrder1 == 0 && rotorOrder3 == 0) {
      rotorOrder2 = 1;
      rotor1 = rotorKeep2;
    } else if (rotorOrder1 != 0 && rotorOrder3 != 0) {
      rotorOrder2 = 3;
      rotor3 = rotorKeep2;
    } else {
      rotorOrder2 = 2;
      rotor2 = rotorKeep2;
    }
  }
  //Click on the third box and assign the corrisponding info
  if (mouseX > 350 && mouseX < 420 && mouseY > 50 && mouseY < 100) {
    if (
      rotorOrder1 != 0 &&
      rotorOrder2 != 0 &&
      rotorOrder3 != 0 &&
      UsingReflector == undefined
    ) {
      UsingReflector = reflectorC;
    } else if (rotorOrder1 == 0 && rotorOrder2 == 0) {
      rotorOrder3 = 1;
      rotor1 = rotorKeep3;
    } else if (rotorOrder1 != 0 && rotorOrder2 != 0) {
      rotorOrder3 = 3;
      rotor3 = rotorKeep3;
    } else {
      rotorOrder3 = 2;
      rotor2 = rotorKeep3;
    }
  }
  //Click on the reset
  if (mouseX > 500 && mouseX < 570 && mouseY > 50 && mouseY < 100) {
    rotorOrder1 = 0;
    rotorOrder2 = 0;
    rotorOrder3 = 0;
    UsingReflector = undefined;
    modifyAlphabetRotor1 = alphabet;
    modifyAlphabetRotor2 = alphabet;
    modifyAlphabetRotor3 = alphabet;
    result = undefined;
  }
}
