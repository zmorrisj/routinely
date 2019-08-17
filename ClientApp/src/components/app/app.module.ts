import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from './app.component';
import { RoutinelyAPIService } from 'src/services/routinely-api.service';
import { CookingSkillComponent } from '../cooking-skill.component/cooking-skill.component';
import { RoutinesListComponent } from '../routines-list.component/routines-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CookingSkillComponent,
    RoutinesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RoutinelyAPIService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
