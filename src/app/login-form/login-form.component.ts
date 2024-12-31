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
      companyName: ['', Validators.required],
      userName:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value; // Get form values
      localStorage.setItem('loginData', JSON.stringify(loginData)); // Save to localStorage
      alert('Login Data Saved Successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
