import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DataService } from './services/data.service'
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes } from '@angular/router';

const routerConfig: Routes = [
  { "path": "", "component": HomeComponent },
  { "path": "home", "component": HomeComponent },
  { "path": "list", "component": StudentListComponent },
  { "path": "student/:id", "component": StudentComponent },
  { "path": "**", "component": HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, { useHash: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
