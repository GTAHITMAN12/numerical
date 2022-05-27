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
  formData: FormGroup;
  errors!:any[];
  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
    public router: Router
  ) {
    this.formData = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
    });
  }


  ngOnInit(): void {
  }

  register(): void {
    this.errors = [];
    this.auth.register(this.formData)
      .subscribe(() => {
        this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
       },
        (errorResponse: { error: { error: any; }; }) => {
          this.errors.push(errorResponse.error.error);
        });
  }
}
