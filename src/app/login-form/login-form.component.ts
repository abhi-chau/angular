import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder) { 
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
      console.log('User Name:', userName);
      console.log('Password:', password);
      // Implement your authentication logic here
    } else {
      console.log('Form is invalid');
    }
  }

}
