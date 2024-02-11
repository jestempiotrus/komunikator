import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  @Output() zajerestrujclick = new EventEmitter<string>();
  haslo = '';

  register(){
    console.log(this.haslo);
    this.zajerestrujclick.emit(this.haslo);
  }
  
  todos: string[] = []
  
  addTodo(value: string) {
    this.todos = [...this.todos, value]
  }
}
