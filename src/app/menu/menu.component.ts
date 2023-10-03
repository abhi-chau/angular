import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  registrationForm: FormGroup = new FormGroup({});
  passwordMismatch = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { username, password, confirmPassword } = this.registrationForm.value;

      if (password !== confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      // Save data to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert("Data store in local host")

      // Clear form and error message
      this.registrationForm.reset();
      this.passwordMismatch = false;
    }
  
}
}
