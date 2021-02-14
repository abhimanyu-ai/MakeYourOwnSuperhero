var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift and P pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById('current_width').innerHTML=block_width;
        document.getElementById('current_height').innerHTML=block_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift and M pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById('current_width').innerHTML=block_width;
        document.getElementById('current_height').innerHTML=block_height;
    }
    if (keypressed == '70') {
        new_image('ironman_face.png');
        console.log("F");
    }
    if (keypressed == '66') {
        new_image('spiderman_body.png');
        console.log("B");
    }
    if (keypressed == '76') {
        new_image('hulk_legs.png');
        console.log("L");
    }
    if (keypressed == '82') {
        new_image('thor_right_hand.png');
        console.log("R");
    }
    if (keypressed == '72') {
        new_image('captain_america_left_hand.png');
        console.log("H");
    }
    if (keypressed == '38') {
        up();
        console.log("Up");
    }
    if (keypressed == '40') {
        down();
        console.log("Down");
    }
    if (keypressed == '37') {
        left();
        console.log("Left");
    }
    if (keypressed == '39') {
        right();
        console.log("Right");
    }
}
function up() {
    if (player_y >=0) {
        player_y=player_y-block_height;
        console.log("Block image height=" + block_height);
        console.log("When up arrow key is pressed, x=" + player_x + "| y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <=500) {
        player_y=player_y+block_height;
        console.log("Block image height=" + block_height);
        console.log("When down arrow key is pressed, x=" + player_x + "| y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x >=0) {
        player_x=player_x-block_width;
        console.log("Block image width=" + block_width);
        console.log("When left arrow key is pressed, x=" + player_x + "|y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <=700) {
        player_x=player_x+block_width;
        console.log("Block image width=" + block_width);
        console.log("When right arrow key is pressed, x=" + "| y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}