import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  email: string = '';
  password: number = 0;

  login() {
    // Retrieve users from local storage
    const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the entered username and password match any stored user
    const matchedUser = storedUsers.find((user) => user.email === this.email &&user.password === this.password);

    if (matchedUser) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  }
}