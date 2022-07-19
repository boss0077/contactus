import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user=new User();
  message='';

  constructor(private _service : RegistrationService ,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.user);
    this._service.registrationUserFromRemote(this.user).subscribe(
      data =>{ console.log("response received");
      this.message="registration successful";},
      error => {console.log("exception occured");
      this.message=error.error;
      }
    )
    }

  
   

  }


