// details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  customerDetails: any;

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read parameters from the route
    this.route.params.subscribe((params) => {
      const customerId = params['customerId'];
      const customerEmail = params['customerEmail'];
      const currentBalance = params['currentBalance'];

      // Call the service to get customer details
      this.authService.getCustomerDetails(customerId, customerEmail, currentBalance).subscribe(
        (details: any) => {
          this.customerDetails = details;
        },
        (error) => {
          console.error('Details error:', error);
        }
        
      );
    });
  }
}
