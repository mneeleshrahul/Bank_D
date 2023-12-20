// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://retoolapi.dev/5qhU8q/data';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { customerId: username, password: password };

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      catchError(error => {
        // Handle error appropriately
        console.error('Login error:', error);
        return throwError('An error occurred during login.');
      })
    );
  }

  getCustomerDetails(): Observable<any> {
    // Adjust the URL to the endpoint providing customer details
    return this.http.get(`${this.apiUrl}/customer-details`).pipe(
      catchError(error => {
        // Handle error appropriately
        console.error('Customer details error:', error);
        return throwError('An error occurred while fetching customer details.');
      })
    );
  }
}
