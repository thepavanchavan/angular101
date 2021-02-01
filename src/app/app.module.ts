import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { DesignutilityService } from './appService/designutility.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor/ngfor.component';

const appRoutes: Routes=[
  {path:'', component:StudentFormComponent},
  {path:'date', component:DateComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    StudentFormComponent,
    NgforComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
