import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    name: string;
    surname: string;
}