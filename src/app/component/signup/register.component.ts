// register.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData!: FormGroup;
  errors: any[]=[" "];
  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
    public router: Router
  ) {
    this.formData = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      passwordConfirmation: [''],
    });
  }


  ngOnInit(): void {
  }

  register(): void {  
    this.errors = [];
    this.auth.register(this.formData.value)
    .subscribe(() => {
        this.router.navigate(['/sign-up'], { queryParams: { registered: 'success' } });
      },
      (errorResponse) => {
        this.errors.push(errorResponse.error.error);
      });
  }
}
