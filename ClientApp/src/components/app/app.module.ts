import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from './app.component';
import { ImgurAPIService } from 'src/services/imgur-api.service';
import { CookingSkillComponent } from '../cooking-skill.component/cooking-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    CookingSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ImgurAPIService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
