import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent {
  signInForm: FormGroup;
  passwordIcon = 'visibility_off'// 'visibility'//visibility_off
  constructor(private fb: FormBuilder, private authService: AuthService) { this.createForm(); }
  createForm() {
    this.signInForm = this.fb.group({
      baseUrl: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.info(this.signInForm.value);
    this.authService.logIn(this.signInForm.value);
  }
  changeVisibility() {
    this.passwordIcon = this.passwordIcon === 'visibility_off' ? 'visibility' : 'visibility_off';
    const a = document.getElementById('pwd');
    a.getAttribute('type') === 'password' ? a.setAttribute('type', 'text') : a.setAttribute('type', 'password');
  }
}
