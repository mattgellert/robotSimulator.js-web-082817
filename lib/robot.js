'use strict';

let directions = [ 'east', 'west', 'north', 'south' ];

class Robot {
  // implement your solution here!
  constructor(){
    this.bearing = "dir"
    this.coordinates = [0,0]
  }

  orient(currentDirection){
    if (directions.includes(currentDirection)) {
      this.bearing = currentDirection
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  at(x,y){
    this.coordinates = [x,y]
  }

  turnRight(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'east'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'east':
        this.bearing = 'south'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }

  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'west'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'north'
        break
      case 'west':
        this.bearing = 'south'
        break
    }
  }

  advance(){
    switch(this.bearing){
      case 'north':
        this.coordinates[1]++
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'east':
        this.coordinates[0]++
        break
      case 'west':
        this.coordinates[0]--
        break
    }
  }

  instructions(inst){
    return inst.split("").map((char) => {
      switch(char){
        case 'A':
          return 'advance'
          break
        case 'R':
          return 'turnRight'
          break
        case 'L':
          return 'turnLeft'
          break
      }
    })
  }

  place(coord_and_dir){
    this.coordinates = [coord_and_dir.x, coord_and_dir.y]
    this.bearing = coord_and_dir.direction
  }

  evaluate(insts){
    this.instructions(insts).forEach((inst) => {
      switch(inst){
        case 'advance':
          this.advance()
          break
        case 'turnRight':
          this.turnRight()
          break
        case 'turnLeft':
          this.turnLeft()
          break
      }
    })
  }


}
