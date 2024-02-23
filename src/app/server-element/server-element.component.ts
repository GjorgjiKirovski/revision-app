import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor(){
    console.log('in constructor')
  }

  ngOnInit(): void {
    console.log('in ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('in ngOnChanges')
    console.log(changes);
  }

}
