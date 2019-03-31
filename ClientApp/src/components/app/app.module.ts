import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from './app.component';
import { CookingSkillService } from 'src/services/cooking-skill.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookingSkillService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
