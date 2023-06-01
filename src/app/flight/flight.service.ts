import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiServerUrl = environment.apiBasedUrl; 

  constructor(private http: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:8090/api/Flights');
  }

  getFlightById(_id: number): Observable<Flight> {
    
    return this.http.get<Flight>('http://localhost:8090/api/fly/{id}');
  }

  addFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(`http://localhost:8090/api/add_flight`, flight);
  }

  updateFlight( FlightId: number, flight: Flight): Observable<Flight> {
     return this.http.put<Flight>(`${this.apiServerUrl}/fly/${FlightId}`, flight);
  }
  /*updateFlight(flight: Flight): Observable<Flight> {
    const url = `http://localhost:8090/api/fly/${flight.id}`;   
    return this.http.put<Flight>(url, flight);
  }*/

  deleteFlight(FlightId: number): Observable<void> {
    const url = (`${this.apiServerUrl}/fly/${FlightId}`);
    return this.http.delete<void>(url);
  }
}