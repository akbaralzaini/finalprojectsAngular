import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
 
  ngOnInit(): void {
  }

  onSubmit(): void { 
    const { username, password,firstName, lastName, agency,details, mobileNumber } = this.form;

    this.authService.register(username, firstName,lastName,mobileNumber,['admin'] , password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(data.id);
        this.registerAgency(data.id,agency, details);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  registerAgency(user_id:number, name:string, details: string):void{
    this.authService.registerAgency(user_id,name,details,"A-"+name).subscribe(
      data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err=>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      } 
    );
  }

}
