import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule, MatIconModule, MatListModule,MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatExpansionModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatFileUploadModule } from 'angular-material-fileupload';

const appRoutes:Routes=[
  
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatFileUploadModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
