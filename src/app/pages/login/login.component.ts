import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from "primeng/api";
import {UserDataService} from "../../core/ui/services/userData.service";
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private router: Router, public userData: UserDataService, private http: HttpClient, private messageService: MessageService) {
    }

    @Output() zalogujclick = new EventEmitter<string>();
    nazwa_uzytkownika = '';
    haslo_uzytkownika = '';

    wyslij() {
        this.http.post<any>('http://praktyki.partyjki.vot.pl/login.php', {
            "nazwa_uzytkownika": this.nazwa_uzytkownika,
            "haslo_uzytkownika": this.haslo_uzytkownika,
        }).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Sukces', detail: 'Logowanie udane!'});
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 1500);
        }, error => {
            console.log(error);
            this.messageService.add({severity: 'error', summary: 'Blad', detail: error.error.message});
        })
    }

    linklogowanie() {
        this.router.navigate(['/login']);
    }
}
