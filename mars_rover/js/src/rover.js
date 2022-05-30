class Rover {
  x;
  y;
  list2= new Array()
  
  orientation;
  obstacle_coordinate_x = 0;
  obstacle_coordinate_y = 0;
  constructor(x, y, orientation, m) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.list2 = m;
    //this.send()
  }

  obstacle() {
    return Math.round(Math.random()); //randomly creating there is a obstacle or not
  }


  move(m) {
    var r = 3; //planet radius for wrapping. in this case its = 3

    if (this.orientation === "N") {
      switch (m) {
        case "f":
          {
          if (this.obstacle()) {
            this.obstacle_coordinate_y = (this.y + 1) % r;
            break;
          }
          this.y = (this.y + 1) % r;
          break;
        }
        case "b":
        {
          if (obstacle()) {
            if (this.y - 1 >= 0) {
              this.obstacle_coordinate_y = this.y - 1;
            } else {
              this.obstacle_coordinate_y = this.y + (r - 1);
            }
            return this.obstacle_coordinate_x,this.obstacle_coordinate_y;
          }

          if (this.y - 1 >= 0) {
            this.y = this.y - 1;
          } else {
            this.y = this.y + (r - 1);
          }
          break;
        }
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
          {
          if (obstacle()) {
            if (this.y - 1 >= 0) {
              this.obstacle_coordinate_y = this.y - 1;
            } else {
              this.obstacle_coordinate_y = this.y + (r - 1);
            }
            break;
          }
          if (this.y - 1 >= 0) {
            this.y = this.y - 1;
          } else {
            this.y = this.y + (r - 1);
          }
          break;
        }
        case "b":
          {
          if (obstacle()) {
            this.obstacle_coordinate_y = (this.y + 1) % r;
            break;
          }
          this.y = (this.y + 1) % r;
          break;
        }
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
          {
          if (this.obstacle) {
            this.obstacle_coordinate_x = (this.x + 1) % r;
            break;
          }
          this.x = (this.x + 1) % r;
          break;
        }
        case "b":
          {
          if (this.obstacle) {
            if (this.x - 1 >= 0) {
              this.obstacle_coordinate_x = this.x - 1;
            } else {
              this.obstacle_coordinate_x = this.x + (r - 1);
            }
            break;
          }
          if (this.x - 1 >= 0) {
            this.x = this.x - 1;
          } else {
            this.x = this.x + (r - 1);
          }
          break;
        }
        case "r":
          this.orientation = "S";
          break;
        case "l":
          this.orientation = "N";
          break;
      }
    } 
    
    else if (this.orientation === "W") {
      switch (m) {
        case "f":
         {
           if (this.obstacle()) {
            if (this.x - 1 >= 0) {
              this.obstacle_coordinate_x = this.x - 1;
            } else {
              this.obstacle_coordinate_x = this.x + (r - 1);
            }
            break;
          }
          if (this.x - 1 < 0) {
            this.x = this.x + (r - 1);
          } else {
            this.x = this.x - 1;
            
          }
          break; 
        }
        case "b":
          {
          if (this.obstacle()) {
            this.obstacle_coordinate_x = (this.x + 1) % r;
            break;
          }
          this.x = (this.x + 1) % r;
          break;
        }
        case "r":
          this.orientation = "N";
          break;
        case "l":
          this.orientation = "S";
          break;
      }
    }
    /*if (m === "f") {
      this.y = this.y + 1;
    } else if (m === "b") {
      this.y = this.y - 1;
    }
    */
  }


  send() {
    /*for (let i = 0; i < this.list.length; i++) {
      this.move(this.list.charAt(i));
    }
    */
   this.list2.forEach(element => {
     this.move(element)
   });
  }


} //class end
module.exports = Rover;
