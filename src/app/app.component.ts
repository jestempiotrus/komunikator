import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'seed-app',
  template: `
    <ui-layout>
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppComponent  {
  title = 'piotr';
  licznik = 0;
  tekst = '';
  wynik = [];
  sesja = '';
  haslo = '';
  nazwa = [];

  constructor(private http: HttpClient) {

  }

  // ngOnInit() {
  //   this.odswiez();
  // }

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
  // sprawdz(){
  //   this.http.post<any>('http://praktyki.partyjki.vot.pl/nazwa.php', {
  //     "sesja": this.sesja,
  //   })
  // }

  zaloguj(event:string){
    this.sesja = event;
  }
  zarejestruj(event:any){
    this.sesja = event;
  }

}
