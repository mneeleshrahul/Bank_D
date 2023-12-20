// customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'your_backend_api_url';

  constructor(private http: HttpClient) { }

  getCustomerDetails(): Observable<any> {
    // Assuming your backend API endpoint for customer details is '/customer'
    return this.http.get(`${this.apiUrl}/customer`);
  }
}
