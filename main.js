canvas = new fabric.Canvas("canvas");
x=10;
y=10;
moveChange = 50;
player_object="";
block_object="";
currentWeapon = "none";
function playerUpdate(weapon){
    if(weapon="none"){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:y,
            left:x
        })
    })
    }else if(weapon="Left"){
        fabric.Image.fromURL("gunLeft.png",function(Img){
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(150);
            player_object.set({
                top:y,
                left:x
            })
        })
    }else if(weapon="Right"){
        fabric.Image.fromURL("gunRight.png",function(Img){
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(150);
            player_object.set({
                top:y,
                left:x
            })
        })
    }
    currentWeapon = weapon;
    canvas.add(player_object);
}
function blockUpdate(block){
    fabric.Image.fromURL(block,function(Img){
        block_object=Img;
        block_object.scaleToWidth(50);
        block_object.scaleToHeight(50);
        block_object.set({
            top:y,
            left:x+80
        })
    })
    canvas.add(block_object);
}
window.addEventListener("keydown",keypress);
function keypress(e){
    var key = e.keyCode;
    if(key=="70"){
        blockUpdate("fire.png");
    }else if(key=="83"){
        blockUpdate("stone.png");
    }else if(key=="87"){
        blockUpdate("Wood.png");
    }else if(key=="76"){
        playerUpdate("Left");
    }else if(key=="82"){
        playerUpdate("Right");
    }else if(key=="78"){
        playerUpdate("none");
    }else if(key="40"){
        if(y<canvas.height-moveChange-50){
        y+=moveChange;
        canvas.remove(player_object);
        playerUpdate(currentWeapon);
        }
    }else if(key="38"){
        if(y>moveChange+50){
        y-=moveChange;
        canvas.remove(player_object);
        playerUpdate(currentWeapon);
        }
    }else if(key="37"){
        if(x>moveChange+50){
        x-=moveChange;
        canvas.remove(player_object);
        playerUpdate(currentWeapon);
        }
    }else if(key="39"){
        if(x<canvas.width-moveChange-50){
        x+=moveChange;
        canvas.remove(player_object);
        playerUpdate(currentWeapon);
        }
    }
}
