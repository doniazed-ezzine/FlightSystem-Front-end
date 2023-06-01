import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: 0,
    fname: '',
    lname: '',
    role: '',
    id: 0,
    flights: ''
  };

  signup() {
    
    const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    
    const isEmailRegistered = storedUsers.some((user) => user.email === this.user.email);

    if (isEmailRegistered) {
      alert('Email already registered!');
    } else {
      
      storedUsers.push(this.user);

      
      localStorage.setItem('users', JSON.stringify(storedUsers));

      alert('Sign up successful!');
    }
  }
}