import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles:[`
    .even-paragraph{
      color:green
    }
  `],
  encapsulation:ViewEncapsulation.None
})
export class OddComponent implements AfterViewInit {

  @ContentChild('oddNumberParagraph', {static:true}) numberParagraph: ElementRef

  ngAfterViewInit(): void {
    this.numberParagraph.nativeElement.style.color = 'blue'
  }

}
