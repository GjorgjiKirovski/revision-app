import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription

  constructor() { }

  ngOnInit() {
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 5){
          observer.complete()
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));
        }
        count++
      }, 1000)
    })

    


    this.firstObsSubscription = customIntervalObservable.pipe(
      filter((data:number) => data > 0),
      map((data: number) => 'Round: ' + (data + 1))).subscribe(
        (data: string) => {
          console.log('in subscribe value:')
          console.log(data)
        }, 
        (error: Error) => {
          alert(error.message)
        })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
