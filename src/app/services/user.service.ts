import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  url = 'http://192.168.1.23:3000/users/'
constructor(private http: HttpClient) { }

register(user: User) {
  if (!user.email || !user.password) {
      return throwError("Please provide both an email address and password.");
  }
    return this.http.post(this.url + 'register', user);
}
login(user: User) {
  if (!user.email || !user.password) {
      return throwError("Please provide both an email address and password.");
  }
    return this.http.post(this.url + 'login', user);
}

}
