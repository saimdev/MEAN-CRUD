import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: 'update/:userId', component:  UpdateComponent},
  { path: 'home', component:  HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
