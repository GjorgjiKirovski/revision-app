import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  logs = [];

  constructor(){}

  toggleDetails(){
    this.showParagraph = !this.showParagraph;
    this.logs.push(new Date()+ (this.showParagraph ? ' showing' : ' hiding') + ' the paragraph, length :'+(this.logs.length+1));
  }


}
