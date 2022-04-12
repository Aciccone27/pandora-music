import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResponse } from './authenticationResponse';

@Component({
  selector: 'pandora-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent {
public buttonClicked!: string;
private authObservable!: Observable<AuthenticationResponse>;

  constructor(private auth:AuthenticationService) { }

 

  public onSubmit(data: NgForm){
    console.log("Button Cliked =" + this.buttonClicked);
    console.log(data.value);

    if(this.buttonClicked == 'SignUp'){
      
      this.authObservable = this.auth.signup(data.value.email, data.value.password);
    }
    if(this.buttonClicked == 'Login'){
      this.authObservable = this.auth.login(data.value.email, data.value.password);
    }

    this.authObservable.subscribe(
      (data:AuthenticationResponse) =>{
        console.log(data);
      },
      error =>{
        console.log(error.error);
      }
    );

    data.reset();

  }

}
