import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public webPathAPI =
    'https://cors-anywhere.herokuapp.com/http://apirest.esy.es/api/v1/users/login.json';
  public localPathAPI = 'http://localhost:8765/api/v1/users/login.json';
  public usuario = {
    username: 'teste',
    password: 123456
  };

  constructor(public http: HttpClient) {}

  onClick() {
    console.log('clicou em login');
    this.http
      .post(this.webPathAPI, JSON.stringify(this.usuario), httpOptions)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
  }
}
