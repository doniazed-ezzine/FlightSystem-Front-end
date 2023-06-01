import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  [x: string]: any;
    
  public users: User[]=[] ;
  public editUser!: User | null;
  public deleteUser!: User | null;
  Flight: any;

  constructor(private userservice: UserService) { }
  ngOnInit() {
    this.getUsers();
      
  }

  

    public getUsers():void  {
      this.userservice.getUsers().subscribe({
       next: (response:User[])=>{
          this.users=response;
        },
        error : (error : HttpErrorResponse)=>{
          alert(error.message);
        }}
        
      );
    }
    public onAddUser(addForm: NgForm): void {
     document.getElementById('add-User-form')?.click();
      this.userservice.addUser(addForm.value).subscribe({
        next: (response: User) => {
          console.log(response);
          this.getUsers();
          addForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }}
      );
    }
    
    public onUpdateUser(userId: number ,use: User): void {
      
      this.userservice.updateUser(userId, use).subscribe({
        next: (response: User) => {
          console.log(response);
          this.getUsers();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }}
      );
    
  }
  

    public onDeleteUser(UserId: number): void {
      this.userservice.deleteUser(UserId).subscribe({
       next: (response: void) => {
          console.log(response);
          this.getUsers();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
      );
    }

    public onOpenModal(use: User | null, mode: string): void {
      const coucou = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addUserModal');
      }
      if (mode === 'edit') {
         this.editUser = use; 
        button.setAttribute('data-target', '#updateUserModal');
      }
      if (mode === 'delete') {
         this.deleteUser = use; 
        button.setAttribute('data-target', '#deleteUserModal');
      }
      coucou?.appendChild(button)
      button.click();
    }
  


}
