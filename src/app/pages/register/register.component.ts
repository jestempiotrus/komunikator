import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from "primeng/api";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  @Output() zajerestrujclick = new EventEmitter<string>();
  nazwa_uzytkownika = '';
  haslo_uzytkownika = '';
  sprawdzenie_hasla = '';

    constructor(private router: Router, private messageService: MessageService, private http: HttpClient) {

    }

    wyslij() {
      this.http.post<any>('http://praktyki.partyjki.vot.pl/register.php', {
        "nazwa_uzytkownika": this.nazwa_uzytkownika,
        "haslo_uzytkownika": this.haslo_uzytkownika,
        "sprawdzenie_hasla": this.sprawdzenie_hasla
      }).subscribe(data => {
        this.messageService.add({severity: 'success', summary: 'Sukces', detail: 'Rejestracja udana!'});
        this.router.navigate(['/login']);
      }, error => {
      console.log(error);
            this.messageService.add({severity: 'error', summary: 'Blad', detail: error.error.message});
      })
    }
    linklogowanie(){
      this.router.navigate(['/login']);
      }
  }

