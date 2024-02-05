import { Component  } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent  {
  todos: string[] = []
  
  addTodo(value: string) {
    this.todos = [...this.todos, value]
  }
}
