var A;
var B;
var C;
var D;
var E;
var F;
var G;
var H;
var I;
var J;
var K;
var L;
var M;
var N;
var O;
var P;
var Q;
var R;
var S;
var T;
var U;
var V;
var X;
var Y;
var W;
var Z;
var blank;



function setup() {
createCanvas (900, 900,);

  A = loadImage("letterA.png");
  B = loadImage("letterB.png");
  C = loadImage("letterC.png");
  D = loadImage("letterD.png");
  E = loadImage("letterE.png");
  F = loadImage("letterF.png");
  G = loadImage("letterG.png");
  H = loadImage("letterH.png");
  I = loadImage("letterI.png");
  J = loadImage("letterJ.png");
  K = loadImage("letterK.png");
  L = loadImage("letterL.png");
  M = loadImage("letterM.png");
  N = loadImage("letterN.png");
  O = loadImage("letterO.png");
  P = loadImage("letterP.png");
  Q = loadImage("letterQ.png");
  R = loadImage("letterR.png");
  S = loadImage("letterS.png");
  T = loadImage("letterT.png");
  U = loadImage("letterU.png");
  V = loadImage("letterV.png");
  X = loadImage("letterX.png");
  Y = loadImage("letterY.png");
  W = loadImage("letterW.png");
  Z = loadImage("letterZ.png");
  cat = loadImage ("letter0.png");


  colorMode(RGB);
  background (10, 255, 220, 10);
}



function draw() {


  camera ((mouseX - width/2) * 0.001, (mouseY - width/2) * 0.001, 1, 0, 0, 0, 0, 1, 0);


  background(10, 255, 220, 100);


  if (keyIsPressed) {
    if (key == 'A' || key == 'a') {
      A();
    }
  }

  if (keyIsPressed) {
    if (key == 'B' || key == 'b') {
      B();
    }
  }

  if (keyIsPressed) {
    if (key == 'C' || key == 'c') {
      C();
    }
  }

  if (keyIsPressed) {
    if (key == 'D' || key == 'd') {
      D();
    }
  }

  if (keyIsPressed) {
    if (key == 'E' || key == 'e') {
      E();
    }
  }

  if (keyIsPressed) {
    if (key == 'F' || key == 'f') {
      F();
    }
  }

  if (keyIsPressed) {
    if (key == 'G' || key == 'g') {
      G();
    }
  }

  if (keyIsPressed) {
    if (key == 'H' || key == 'h') {
      H();
    }
  }

  if (keyIsPressed) {
    if (key == 'I' || key == 'i') {
      I();
    }
  }

  if (keyIsPressed) {
    if (key == 'J' || key == 'j') {
      J();
    }
  }

  if (keyIsPressed) {
    if (key == 'k' || key == 'k') {
      K();
    }
  }

  if (keyIsPressed) {
    if (key == 'L' || key == 'l') {
      L();
    }
  }

  if (keyIsPressed) {
    if (key == 'M' || key == 'm') {
      M();
    }
  }

  if (keyIsPressed) {
    if (key == 'N' || key == 'n') {
      N();
    }
  }

  if (keyIsPressed) {
    if (key == 'o' || key == 'O') {
      O();
    }
  }

  if (keyIsPressed) {
    if (key == 'P' || key == 'p') {
      P();
    }
  }

  if (keyIsPressed) {
    if (key == 'q' || key == 'Q') {
      Q();
    }
  }

  if (keyIsPressed) {
    if (key == 'R' || key == 'r') {
      R();
    }
  }

  if (keyIsPressed) {
    if (key == 'S' || key == 's') {
      S();
    }
  }

  if (keyIsPressed) {
    if (key == 't' || key == 'T') {
      T();
    }
  }

  if (keyIsPressed) {
    if (key == 'u' || key == 'U') {
      U();
    }

    if (keyIsPressed) {
      if (key == 'V' || key == 'v') {
        V();
      }
    }

    if (keyIsPressed) {
      if (key == 'X' || key == 'x') {
        X();
      }
    }

    if (keyIsPressed) {
      if (key == 'Y' || key == 'y') {
        Y();
      }
    }

    if (keyIsPressed) {
      if (key == 'W' || key == 'w') {
        W();
      }
    }

    if (keyIsPressed) {
      if (key == 'X' || key == 'x') {
        X();
      }
    }

    if (keyIsPressed) {
      if (key == 'z' || key == 'Z') {
        Z();
      }
    }
  } else {

    blank();
  }
}
//}




/////////////////////////////////////////////////////////////////

function A() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (A, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (A, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (A, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (A, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (A, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (A, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -410);
  image (A, 0, 0, 512, 512);
  pop();
}






function B() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (B, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (B, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (B, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (B, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (B, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (B, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (B, 0, 0, 512, 512);
  pop();
}


function C() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (C, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (C, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (C, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (C, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (C, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (C, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (C, 0, 0, 512, 512);
  pop();
}


function D() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (D, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (D, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (D, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (D, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (D, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (D, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (D, 0, 0, 512, 512);
  pop();
}


function E() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (E, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (E, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (E, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (E, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (E, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (E, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (E, 0, 0, 512, 512);
  pop();
}

function F() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (F, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (F, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (F, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (F, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (F, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (F, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (F, 0, 0, 512, 512);
  pop();
}



function G() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (G, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (G, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (G, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (G, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (G, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (G, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (G, 0, 0, 512, 512);
  pop();
}


function H() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (H, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (H, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (H, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (H, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (H, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (H, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (H, 0, 0, 512, 512);
  pop();
}



function I() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (I, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (I, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (I, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (I, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (I, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (I, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (I, 0, 0, 512, 512);
  pop();
}

function J() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (J, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (J, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (J, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (J, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (J, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (J, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (J, 0, 0, 512, 512);
  pop();
}

function K() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (K, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (K, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (K, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (K, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (K, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (K, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (K, 0, 0, 512, 512);
  pop();
}


function L() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (L, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (L, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (L, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (L, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (L, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (L, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (L, 0, 0, 512, 512);
  pop();
}

function M() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (M, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -960);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (M, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (M, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (M, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (M, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (M, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (M, 0, 0, 512, 512);
  pop();
}

function N() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (N, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (N, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (N, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (N, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (N, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (N, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (N, 0, 0, 512, 512);
  pop();
}


function O() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (O, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (O, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (O, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (O, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (O, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (O, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (O, 0, 0, 512, 512);
  pop();
}

function P() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (P, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (P, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (P, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (P, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (P, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (P, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (P, 0, 0, 512, 512);
  pop();
}

function Q() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (Q, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (Q, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (Q, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (Q, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (Q, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (Q, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (Q, 0, 0, 512, 512);
  pop();
}

function R() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (R, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (R, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (R, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (R, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (R, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (R, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (R, 0, 0, 512, 512);
  pop();
}

function S() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (S, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (S, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (S, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (S, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (S, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (S, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (S, 0, 0, 512, 512);
  pop();
}

function T() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (T, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (T, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (T, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (T, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (T, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (T, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (T, 0, 0, 512, 512);
  pop();
}

function U() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (U, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (U, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (U, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (U, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (U, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (U, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (U, 0, 0, 512, 512);
  pop();
}

function V() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (V, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (V, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (V, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (V, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (V, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (V, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (V, 0, 0, 512, 512);
  pop();
}

function W() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (W, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (W, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (W, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (W, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (W, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (W, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (W, 0, 0, 512, 512);
  pop();
}

function X() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (X, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (X, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (X, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (X, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (X, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (X, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (X, 0, 0, 512, 512);
  pop();
}

function Y() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (Y, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (Y, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (Y, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (Y, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (Y, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (Y, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (Y, 0, 0, 512, 512);
  pop();
}

function Z() {

  imageMode(CENTER);

  push();
  translate(0, 0, -2060);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -2010);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1960);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1910);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1860);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1810);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1760);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1710);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1660);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1610);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1560);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1510);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1460);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1410);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1360);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1310);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1260);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1210);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1160);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1110);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1060);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -1010);
  image (Z, 0, 0, 512, 512);
  pop()

    ;
  push();
  translate(0, 0, -960);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -910);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -860);
  image (Z, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -810);
  image (Z, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -760);
  image (Z, 0, 0, 512, 512);
  pop();
  push();

  translate(0, 0, -710);
  image (Z, 0, 0, 512, 512);
  pop();
  push();
  translate(0, 0, -660);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -610);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -560);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -510);
  image (Z, 0, 0, 512, 512);
  pop();

  push();
  translate(0, 0, -460);
  image (Z, 0, 0, 512, 512);
  pop();
}

function blank() {
  push();

  translate(0, 0, -810);
  image (blank, 0, 0, 512, 512);
  pop();
}
