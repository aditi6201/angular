import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Mycomponents/home/home.component';
import { MainComponent } from './Mycomponents/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [
  //  HttpClientModule,
   AgGridModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
