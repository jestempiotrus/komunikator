import { Component, EventEmitter, Output  } from '@angular/core';
import {UserDataService} from "../../core/ui/services/userData.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  @Output() zajerestrujclick = new EventEmitter<string>();
  haslo = '';

  constructor(public userData: UserDataService) {
    userData.name = "ustawione w HomeComponent";
  }

  register(){
    console.log(this.haslo);
    this.zajerestrujclick.emit(this.haslo);
  }
  
  todos: string[] = []
  
  addTodo(value: string) {
    this.todos = [...this.todos, value]
  }
}
