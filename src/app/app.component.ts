import { Component,  ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
}