import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class AppContactComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private http: HttpClient
  ) {};

  onSubmit() {
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('email', this.contactForm.value.email)
    .append('message', this.contactForm.value.message)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Niestety nie udało się wysłać wiadomości");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert("Wiadomość została wysłana");
          } else {
            alert("Something went wrong when sending your message.");
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );
  };

  ngOnInit() {
  };
};