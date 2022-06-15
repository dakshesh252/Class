canvas = document.getElementById("My_canvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Rover_imgTag = new Image();
    Rover_imgTag.onload = uploadrover;
    Rover_imgTag.src = rover_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(Rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown",My_keydown);
function My_keydown(e) {

    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='38')
    {
        UP();
        console.log("Up");
    }

    if (keyPressed=='40')
    {
        Down();
        console.log("Down");
    }

    if (keyPressed=='37')
    {
        Left();
        console.log("Left");
    }

    if (keyPressed=='39')
    {
        Right();
        console.log("Right");
    }
    
    
}

function UP() 
{
    if(rover_y >=0){
        rover_y=rover_y-20;
        console.log("When up arrow key is pressed, X ="+rover_x | "y ="+rover_y );
        uploadBackground();
        uploadrover();
    }
}

function Down() 
{
    if(rover_y <=500){
        rover_y=rover_y+10;
        console.log("When Down arrow key is pressed, X ="+rover_x | "y ="+rover_y );
        uploadBackground();
        uploadrover();
    }
}

function Left() 
{
    if(rover_x >=0){
        rover_x=rover_x-20;
        console.log("When Left arrow key is pressed, X ="+rover_x | "y ="+rover_y );
        uploadBackground();
        uploadrover();
    }
}

function Right() 
{
    if(rover_x <=700){
        rover_x=rover_x+10;
        console.log("When Right arrow key is pressed, X ="+rover_x | "y ="+rover_y );
        uploadBackground();
        uploadrover();
    }
}