
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Flight } from './flight';
import { FlightService } from './flight.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../user/user';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  
  public flightss: Flight[]=[] ;
  public editFlight!: Flight | null;
  public deleteFlight!: Flight | null;
  Flight: any;
 
 

  

  constructor(private flightservice: FlightService, private router:Router ) { }
  ngOnInit() {
    this.getFlightss();
      
  }

  GOToUser(): void  {
    this.router.navigateByUrl('/utilisateur')
    }


    public getFlightss():void  {
      this.flightservice.getFlights().subscribe({
       next: (response:Flight[])=>{
          this.flightss=response;
        },
        error : (error : HttpErrorResponse)=>{
          alert(error.message);
        }}
        
      );
    }
    public onAddFlight(addForm: NgForm): void {
     document.getElementById('add-Flight-form')?.click();
      this.flightservice.addFlight(addForm.value).subscribe({
        next: (response: Flight) => {
          console.log(response);
          this.getFlightss();
          addForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }}
      );
    }
    
    public onUpdateFlight(FlightId: number ,Flyt: Flight): void {
      
      this.flightservice.updateFlight(FlightId, Flyt).subscribe({
        next: (response: Flight) => {
          console.log(response);
          this.getFlightss();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }}
      );
    
  }
 

    public onDeleteFlight(employeeId: number): void {
      this.flightservice.deleteFlight(employeeId).subscribe(
        (response: void) => {
          console.log(response);
          this.getFlightss();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onOpenModal(flyt: Flight | null, mode: string): void {
      const coucou = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addFlightModal');
      }
      if (mode === 'edit') {
         this.editFlight = flyt; 
        button.setAttribute('data-target', '#updateFlightModal');
      }
      if (mode === 'delete') {
         this.deleteFlight = flyt; 
        button.setAttribute('data-target', '#deleteFlightModal');
      }
      coucou?.appendChild(button)
      button.click();
    }

   

  }

