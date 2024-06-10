class pongGame {
    constructor() {

        this.ballX = width / 2;
        this.ballY = height / 2;
        this.ballXSpeed = 4;
        this.ballYSpeed = 5;

        this.playerAX = 75;
        this.playerAY = height / 2;
        this.playerBX = 775;
        this.playerBY = height / 2;

        this.space = 50;
    }

    display() {
        background(255);
        fill(255);
        rect(50, 50, 800);

        fill(150);
        ellipse(this.ballX, this.ballY, 50);
        this.ballX += this.ballXSpeed;
        this.ballY += this.ballYSpeed;
        this.bouncing();

        this.player();
        this.playerAMovement();
        this.playerBMovement();

        this.mainHubInPong();

        this.collisionDetection();

        this.losingLine()
    }

    bouncing() {
        if (this.ballX > 825) {
            this.ballXSpeed *= -1;
        }

        else if (this.ballX < 75) {
            this.ballXSpeed *= -1;
        }

        else if (this.ballY > 825) {
            this.ballYSpeed *= -1;
        }

        else if (this.ballY < 75) {
            this.ballYSpeed *= -1;
        }

    }

    player() {
        //player A
        fill(0);
        rect(this.playerAX, this.playerAY, 25, 100);

        //player B
        fill(0);
        rect(this.playerBX, this.playerBY, 25, 100);
    }

    playerAMovement() {
        //player A movement
        if (keyIsPressed && keyCode === 87 && this.playerAY > 50 ) {
            this.playerAY -= 5
        }

        if (keyIsPressed && keyCode === 83 && this.playerAY + 50 < 800) {
            this.playerAY += 5
        }
    }

    playerBMovement() {
        //play B movement   
        if (keyIsPressed && keyCode === 38 && this.playerBY > 50) {
            this.playerBY -= 5
        }

        if (keyIsPressed && keyCode === 40 && this.playerBY + 50 < 800) {
            this.playerBY += 5
        }
    }

    mainHubInPong() {
        fill(150);
        rect(50, 850, 200, 50);
        textSize(30);
        fill(0);
        text("Back To Menu", 60, 890);

        if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
            background(255);
            loop();
            mainHubActive = true;
            snakeActive = false;
            flappyBirdActive = false;
            pongActive = false;
            clear();
            game = new mainHub;
        }
    }

    collisionDetection(){
        //player A
        if (this.ballX <= this.playerAX + 50 && 
            this.ballY >=this.playerAY &&
            this.ballY <= this.playerAY+100){
            this.ballXSpeed *= -1; 
        }

        //player B
        if (this.ballX >= this.playerBX - 25 && 
            this.ballY >=this.playerBY &&
            this.ballY <= this.playerBY+100){
            this.ballXSpeed *= -1; 
            }
    }

    losingLine(){
        for (let i = 0; i < width; i += 40) {
            fill(255, 255, 0);
            rect(this.playerAX, i , 1, 20);
            //this.space += 0.1;
          }

          for (let i = 0; i < width; i += 40) {
            fill(255, 255, 0);
            rect(this.playerBX + 25, i , 1, 20);
            
          }
    } 
}