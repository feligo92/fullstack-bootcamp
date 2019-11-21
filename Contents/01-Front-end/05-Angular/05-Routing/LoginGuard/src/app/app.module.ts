import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './views/user/user.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';


let config: Routes = [
  { "path": "login", "component": LoginComponent },
  { "path": "register", "component": RegisterComponent },
  { "path": "user", "component": UserComponent,"canActivate":[AuthGuard] }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(config, { useHash: true })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
