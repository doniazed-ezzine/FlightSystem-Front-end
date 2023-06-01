import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environment/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
 export class UserService {
    private apiServerUrl = environment.apiBasedUrl; 
  
    constructor(private http: HttpClient) { }
  
    public getUsers(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:8090/api/users');
    }
  
  
  
   public  addUser(user: User): Observable<User> {
      return this.http.post<User>(`http://localhost:8090/api/addusert`, user);
    }
  
   public  updateUser( UserId: number, user: User): Observable<User> {
       return this.http.put<User>(`${this.apiServerUrl}/user/${UserId}`, user);
    }
   
  
   public  deleteUser(UserId: number): Observable<void> {
      const url = (`${this.apiServerUrl}/user/${UserId}`);
      return this.http.delete<void>(url);
    }
  
  }
  
  