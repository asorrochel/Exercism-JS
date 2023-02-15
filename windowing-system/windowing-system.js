// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

//constructor Default
export function Size(width=80,height=60) {
  this.width = width;
  this.height = height;
  this.resize = function (width, height) {
    this.width = width;
    this.height = height;
  }
}

export function Position(x=0,y=0){
    this.x = x;
    this.y = y;
    this.move = function(x,y){
        this.x = x;
        this.y = y;
    }
}

export function ProgramWindow(){
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
    this.resize = Size => {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        const newWidth = Math.max(1, Math.min(Size.width, maxWidth));
        const newHeight = Math.max(1, Math.min(Size.height, maxHeight));
        this.size.resize(newWidth, newHeight);
    }
    this.move = Position => {
        const newX = Math.max(0, Math.min(Position.x, this.screenSize.width - this.size.width));
        const newY = Math.max(0, Math.min(Position.y, this.screenSize.height - this.size.height));
        this.position.move(newX, newY);
    }
}

export function changeWindow(ProgramWindow){
    ProgramWindow.resize(new Size(400,300));
    ProgramWindow.move(new Position(100,150));

    return ProgramWindow;
}