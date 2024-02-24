import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>()

  lastNumber = 0;

  intervalStarted:boolean = false;

  interval:any;


  startGame(){
    if(this.intervalStarted){
      return;
    }
    this.intervalStarted = true;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 1000)
  }

  pauseGame(){
    this.intervalStarted = false;
    clearInterval(this.interval);
  }
}
