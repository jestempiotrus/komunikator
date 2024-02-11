import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent  {
title = 'piotr';
  licznik = 0;
  tekst = '';
  wynik = [];
  sesja = '';
  haslo = '';
  nazwa = [];
  http:HttpClient;

  constructor(test: HttpClient) {
    this.http = test;
  }

  ngOnInit() {
    this.odswiez();
  }

  zwiekszLicznik() {
    this.licznik++;
  }

  zmniejszLicznik() {
    this.licznik--;
  }

  odswiez() {
    this.http.get<any>('http://praktyki.partyjki.vot.pl/wiadomosc.php').subscribe(data => {
      this.wynik = data
      setTimeout(() => {
        this.odswiez();
      }, 1000);
    })
  }

  wyslij() {
    this.http.post<any>('http://praktyki.partyjki.vot.pl/komunikator.php', {
      "sesja": this.sesja,
      "wiadomosc": this.tekst
    }).subscribe(data => {
      this.tekst='';
    })
  }
  sprawdz(){
    this.http.post<any>('http://praktyki.partyjki.vot.pl/nazwa.php', {
      "sesja": this.sesja,
    })
  }

  zaloguj(event:string){
    this.sesja = event;
  }
  zarejestruj(event:any){
    this.sesja = event;
  }
  todos: string[] = []
  
  addTodo(value: string) {
    this.todos = [...this.todos, value]
  }
}
