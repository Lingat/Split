let letters = []
let letterSize = 60;
function setup() {
    createCanvas(600, 600);
   
    fill(255);
    
}
  
function draw() {
    background(50)
    frameRate(150)
    if (keyIsPressed == true) {
        letters.push({
            x: mouseX,
            y: mouseY,
            vx: random(-1, 5),
            vy: random(-1, 5),
            color: random(0, 255),
            size:  random(20, 100),
            char: key
        })

    } 
    drawLetters();
    updateLetters();

  
  }


function drawLetters() {
    for(l in letters) {
        textSize(letters[l].size);
        fill(letters[l].color, letters[l].color, letters[l].color)
        text(letters[l].char, letters[l].x, letters[l].y)
    }
}

function updateLetters() {
    for(l in letters) {
        letters[l].x +=  letters[l].vx;
        letters[l].y += letters[l].vy;

        if(letters[l].x <= 5 || letters[l].y <= 5 || 
            letters[l].x >= width-letters[l].size || letters[l].y >= height-letters[l].size ) {
           if(letters[l].size >= 5) {
            letters.push({
                x: letters[l].x-10,
                y: letters[l].y,
                vx: -letters[l].vx,
                vy: -letters[l].vy,
                color: letters[l].color,
                size: letters[l].size/2,
                char: letters[l].char
            })
            letters.push({
                x: letters[l].x-10,
                y: letters[l].y,
                vx: -letters[l].vx+2,
                vy: letters[l].vy+1,
                color: letters[l].color,
                size: letters[l].size/2,
                char: letters[l].char
            })
           }
            letters.splice(l, 1);
        }
    }
}