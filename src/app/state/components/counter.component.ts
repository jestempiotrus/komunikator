import { Component  } from '@angular/core';

import { Store } from '@ngrx/store';
import { CounterState, INCREMENT, DECREMENT, RESET } from '../reducers/counter';

@Component({
  selector: 'state-counter',
  template: `
    <input class="btn btn-secondary btn-sm disabled" type="number" [(ngModel)]="counter" />
		<button class="btn btn-secondary btn-sm" (click)="increment()">
      <i class="fa fa-plus"></i>
    </button>
    <button  class="btn btn-secondary btn-sm" (click)="decrement()">
      <i class="fa fa-minus"></i>
    </button>
		<button  class="btn btn-secondary btn-sm" (click)="reset()">
      <i class="fa fa-remove"></i>
    </button>
  `,
})
export class CounterComponent  {

  counter: number;

	constructor(private store: Store<CounterState>) {
		store.select('counter')
      .subscribe((res:any) => this.counter = res.counter)
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
