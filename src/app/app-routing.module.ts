import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Mycomponents/home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { MainComponent } from './Mycomponents/main/main.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"about", component: AboutComponent },
  { path:"main", component: MainComponent },
  { path:"contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
