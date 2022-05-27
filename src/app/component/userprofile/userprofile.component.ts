import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})

export class UserprofileComponent implements OnInit {
  currentUser: any = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    if(this.authService.isAuthenticated())
    {
    };
  }

  ngOnInit() {}
}
