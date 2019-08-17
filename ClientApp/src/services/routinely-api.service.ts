import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine as Routine } from 'src/components/RoutinelyAPIModels';

@Injectable({
  providedIn: 'root'
})
export class RoutinelyAPIService {

  constructor(
    private readonly BrowserLocation: Location,
    private readonly Connection: HttpClient
  ) { }

  public URLRoute: string = 'api/routinely-api';

  getRoutines() {
    return [
      { 'recipeId': 1, 'difficulty': 1, 'name': 'Garden Salad', 'isCookable': false }
    ];
  }

  public getRoutinesController(): Observable<Array<Routine>> {
    // console.log(this.BrowserLocation);
    // console.log(this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/Get'));
    return this.Connection.get<Array<Routine>>(
      this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/Get')
    );
  }

  public PostImgurGalleryTag(tag: Array<Routine>): Observable<number> {
    return this.Connection.post<number>(
      this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/post-imgur-gallery-tag'),
      tag
    );
  }

}
