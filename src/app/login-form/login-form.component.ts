import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage: string = '';

  constructor(private fb:FormBuilder ,private authservice:AuthService ,private route:Router) { 

    this.loginForm = this.fb.group({
      userName:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      let logginSuccessfull =  this.authservice.login(userName,password);
      if(logginSuccessfull){
        const userRole = this.authservice.getUserRole();
        if(userRole === 'admin'){
          this.route.navigate(['/admin']);
        } else if(userRole === 'user'){
          this.route.navigate(['./user']);
        } else{
          this.errorMessage = "Invalid UserName and Password";
        }
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
