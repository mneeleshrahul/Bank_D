// details.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  customerDetails: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCustomerDetails().subscribe(
      (details: any) => {
        this.customerDetails = details;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
