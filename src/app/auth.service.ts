// // // auth.service.ts
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { map } from 'rxjs/operators';


// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class AuthService {
// //   private apiUrl = 'https://retoolapi.dev/5qhU8q/data';

// //   constructor(private http: HttpClient) {}

// //   login(username: string, password: string): Observable<boolean> {
// //     return this.http.get(`${this.apiUrl}?customerId=${username}&password=${password}`).pipe(
// //       map((response: any) => Array.isArray(response) && response.length > 0)
// //     );
// //   }

// //   getCustomerDetails(): Observable<any> {
// //     return this.http.get(this.apiUrl);
// //   }
// // }
// // auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'https://retoolapi.dev/5qhU8q/data';

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<boolean> {
//     const url = `${this.apiUrl}?customerId=${username}&password=${password}`;
//     return this.http.get(url).pipe(
//       map((response: any) => Array.isArray(response) && response.length > 0)
//     );
//   }

//   getCustomerDetails(customerId: string, customerEmail: string, currentBalance: number): Observable<any> {
//     const url = `${this.apiUrl}?coustomerId=${customerId}&coustomerEmail=${customerEmail}&balance=${currentBalance}`;
//     return this.http.get(url);
//   }
// }
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private apiUrl = 'https://retoolapi.dev/5qhU8q/data'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}
  

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}?customerId=${username}&password=${password}`;
    return this.http.get(url).pipe(
      map((response: any) => Array.isArray(response) && response.length > 0)
    );
  }

  getCustomerDetails(customerId: string, customerEmail: string, currentBalance: number): Observable<any> {
    // Adjust the URL and parameters based on your backend API
    return this.http.get(`${this.apiUrl}
    params: {
      customerId: customerId,
      customerEmail: customerEmail,
      currentBalance: currentBalance.toString(),`);
  }
}
