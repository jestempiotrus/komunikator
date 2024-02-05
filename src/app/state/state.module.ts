import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module'

import { CounterComponent } from './components/counter.component'
import { counterReducer } from './reducers/counter';

const reducers = {
  counter: counterReducer,
}

@NgModule({
  imports: [
    CoreModule,
    StoreModule.forRoot(reducers),
  ],
  declarations: [
    CounterComponent,
  ],
  exports: [
    CounterComponent,
    StoreModule,
  ]
})
export class StateModule { }
