class player {
constructor(x,y){
this.x = x;
this.y = y;
this.spt = createSprite(this.x,this.y,50,50);
this.spt.shapeColor = "orange";
player = new player(width/2,height-25)
}
move(xdir,ydir){
this.spt.x+=xdir*grid;
this.spt.y+=ydir*grid;


}



}