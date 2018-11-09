import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //uri = 'http://localhost:8080/api/v1/messages';
  uri = window.location.protocol + "//" + window.location.host + "/api/v1/messages";

  constructor(private http: HttpClient, private router: Router, private location : Location) { }

  firstClick() {
    console.log('clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  addMessage(id, content) {
    const obj = {
      id: id,
      content: content
    };

    console.log("obj id : " + obj.id);
    console.log("obj content : " + obj.content);

    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getMessages() {

    console.log("Router url in dataService : " + this.router.url);
    console.log("Location path in dataService : " + this.uri);

    return this
           .http
           .get(`${this.uri}`);
  }

}
