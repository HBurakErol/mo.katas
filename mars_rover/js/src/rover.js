class Rover {
  x;
  y;
  list2 = new Array();

  orientation;
  obstacle_coordinate_x = 0;
  obstacle_coordinate_y = 0;
  constructor(x, y, orientation, m) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.list2 = m;
  }

  obstacle() {
    //randomly creating there is a obstacle or not
    let randomboolean=Math.random()
    return Boolean (randomboolean < 0.5)
  }

  move(m) {
    var r = 3; //planet radius for wrapping. in this case its = 3

    if (this.orientation === "N") {
      switch (m) {
        case "f":
          if (Boolean (this.obstacle())===true) {
            this.obstacle_coordinate_y = (this.y + 1) % r;
            this.obstacle_coordinate_x = this.x;
            this.end();
          }
          this.y = (this.y + 1) % r;
          break;

        case "b":
          if (Boolean (this.obstacle())===true) {
            if (this.y - 1 < 0) {
              this.obstacle_coordinate_y = this.y + (r - 1);
              this.obstacle_coordinate_x = this.x;
            } else {
              this.obstacle_coordinate_y = this.y - 1;
              this.obstacle_coordinate_x = this.x;
            }
            this.end();
          }

          if (this.y - 1 < 0) {
            this.y = this.y + (r - 1);
          } else {
            this.y = this.y - 1;
          }
          break;

        case "r":
          this.orientation = "E";
          break;
        case "l":
          this.orientation = "W";
          break;
      }
    } 
    
    else if (this.orientation === "S") {
      switch (m) {
        case "f":
          if (Boolean (this.obstacle())===true) {
            if (this.y - 1 < 0) {
              this.obstacle_coordinate_y = this.y + (r - 1);
              this.obstacle_coordinate_x = this.x;
            } else {
              this.obstacle_coordinate_y = this.y - 1;
              this.obstacle_coordinate_x = this.x;
            }
            this.end();
          }
          if (this.y - 1 < 0) {
            this.y = this.y + (r - 1);
          } else {
            this.y = this.y - 1;
          }
          break;

        case "b":
          if (Boolean (this.obstacle())===true) {
            this.obstacle_coordinate_y = (this.y + 1) % r;
            this.obstacle_coordinate_x = this.x;
            this.end();
          }
          this.y = (this.y + 1) % r;
          break;

        case "r":
          this.orientation = "W";
          break;
        case "l":
          this.orientation = "E";
          break;
      }
    } 
    
    else if (this.orientation === "E") {
      switch (m) {
        case "f":
          if (Boolean (this.obstacle())===true) {
            this.obstacle_coordinate_x = (this.x + 1) % r;
            this.obstacle_coordinate_y = this.y;
            this.end();
          }
          this.x = (this.x + 1) % r;
          break;

        case "b":
          if (Boolean (this.obstacle())===true) {
            if (this.x - 1 < 0) {
              this.obstacle_coordinate_x = this.x + (r - 1);
              this.obstacle_coordinate_y = this.y;
            } else {
              this.obstacle_coordinate_x = this.x - 1;
              this.obstacle_coordinate_y = this.y;
            }
            this.end();
          }
          if (this.x - 1 < 0) {
            this.x = this.x + (r - 1);
          } else {
            this.x = this.x - 1;
          }
          break;

        case "r":
          this.orientation = "S";
          break;
        case "l":
          this.orientation = "N";
          break;
      }
    } else if (this.orientation === "W") {
      switch (m) {
        case "f":
          if (Boolean (this.obstacle())===true) {
            if (this.x - 1 < 0) {
              this.obstacle_coordinate_x = this.x + (r - 1);
              this.obstacle_coordinate_y = this.y;
            } else {
              this.obstacle_coordinate_x = this.x - 1;
              this.obstacle_coordinate_y = this.y;
            }
            this.end();
          }
          if (this.x - 1 < 0) {
            this.x = this.x + (r - 1);
          } else {
            this.x = this.x - 1;
          }
          break;

        case "b":
          if (Boolean (this.obstacle())===true) {
            this.obstacle_coordinate_x = (this.x + 1) % r;
            this.obstacle_coordinate_y = this.y;
            this.end();
          }
          this.x = (this.x + 1) % r;
          break;

        case "r":
          this.orientation = "N";
          break;
        case "l":
          this.orientation = "S";
          break;
      }
    }
  }

  send() {
    this.list2.forEach((element) => {
      this.move(element);
    });
  }

  end() {
    this.list2 = [];
  }
 
} 
module.exports = Rover;
