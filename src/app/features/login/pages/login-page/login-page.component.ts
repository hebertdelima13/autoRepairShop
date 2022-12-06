import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  error: boolean = false;
  loginForm!: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = 'E-mail ou senha incorreta!';

  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;
    this.usersService
      .login(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      )
      .subscribe(
        (user) => {
          localStorage.setItem('token', user.token);
          this.router.navigateByUrl('calendario');
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.authError = true;
          if (error.status !== 400) {
            this.authMessage = 'Erro no servidor, tente mais tarde!';
          }
        }
      );
  }
}
