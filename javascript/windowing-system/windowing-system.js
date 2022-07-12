// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
    constructor(width, height) {
        this.width = width || 80;
        this.height = height || 60;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }

}

export class Position {
    constructor(x,y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    move(x,y) {
        this.x = x;
        this.y = y;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = {
            width: 800,
            height: 600,
        }
        this.size = new Size();
        this.position = new Position();
    }
    
    resize(newSize) {
        if (newSize.width < 1 || newSize.height < 1) {
            this.size = new Size(1,1);
            return;
        } 
        const w = newSize.width > this.screenSize.width - this.position.x ? 
            this.screenSize.width - this.position.x :
            newSize.width;

        const h = newSize.height > this.screenSize.height - this.position.y ? 
            this.screenSize.height - this.position.y :
            newSize.height;

        this.size = new Size(w, h);
    }

    move(pos) {
        if(pos.x < 0 || pos.y < 0) {
            this.position = new Position(0,0);
            return
        } 

        const x = pos.x > this.screenSize.width - this.size.width ? 
            this.screenSize.width - this.size.width :
            pos.x;

        const y = pos.y > this.screenSize.height - this.size.height ? 
            this.screenSize.height - this.size.height :
            pos.y;

        this.position = new Position(x,y);
    }
    
};


export const changeWindow = (win) => {
    win.resize({width: 400, height: 300});
    win.move({x: 100, y: 150});
    return win;
};
