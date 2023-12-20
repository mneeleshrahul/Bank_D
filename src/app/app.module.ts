// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { NewApiService } from './new-api.service';
import { EmployeeComponent } from './employee/employee.component';
 


@NgModule({
  declarations: [AppComponent, LoginComponent, DetailsComponent, EmployeeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [NewApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
