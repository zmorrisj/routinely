import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImgurAPI } from 'src/components/ImgurAPIModels';

@Injectable({
  providedIn: 'root'
})
export class ImgurAPIService {

  constructor(
    private readonly BrowserLocation: Location,
    private readonly Connection: HttpClient
  ) { }

  public URLRoute: string = 'api/imgur-api';

  getImgurGallery() {
    return [
      { 'recipeId': 1, 'difficulty': 1, 'name': 'Garden Salad', 'isCookable': false }
    ];
  }

  public getImgurGalleryController(): Observable<Array<ImgurAPI>> {
    // console.log(this.Connection.get<Array<ImgurAPI>>(this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/Get')));
    return this.Connection.get<Array<ImgurAPI>>(
      this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/Get')
    );
  }

  public PostImgurGalleryTag(tag: Array<ImgurAPI>): Observable<number> {
    return this.Connection.post<number>(
      this.BrowserLocation.prepareExternalUrl(this.URLRoute + '/post-imgur-gallery-tag'),
      tag
    );
  }

}
