import { Component, OnInit } from '@angular/core';
import { ImgurAPIService } from 'src/services/imgur-api.service';
import { ImgurAPI } from '../imgurAPIModels';

@Component({
  selector: 'app-cooking-skill-component',
  templateUrl: './cooking-skill.component.html',
  styleUrls: ['./cooking-skill.component.scss']
})
export class CookingSkillComponent implements OnInit {

  public imgurAPI: Array<ImgurAPI>;

  public cookingSkill = 0;

  public cookingSkillBadgeClass = 'badge-light';

  constructor(
    private _imgurAPIService: ImgurAPIService
  ) { }

  ngOnInit(): void {
    this._imgurAPIService.getImgurGalleryController()
      .subscribe(
        (imgurGalleryPost: Array<ImgurAPI>) => {
          this.imgurAPI = imgurGalleryPost;
        }
      );
  }

  // public changeResponse(response: boolean, index: number): void {
  //   this.imgurAPI[index].isCookable = response;
  // }

  // public calculateCookingSkill(): void {
  //   this._imgurAPIService.CalculateSkill(this.imgurAPI)
  //     .subscribe(
  //       calculatedSkill => {
  //         this.cookingSkill = calculatedSkill;

  //         // Determine cooking skill badge color
  //         if (this.cookingSkill >= 0 && this.cookingSkill < 4) {
  //           this.cookingSkillBadgeClass = 'badge-danger';
  //         } else if (this.cookingSkill >= 4 && this.cookingSkill < 7) {
  //           this.cookingSkillBadgeClass = 'badge-secondary';
  //         } else {
  //           this.cookingSkillBadgeClass = 'badge-success';
  //         }
  //       });
  // }

  public resetCookingSkill(cookableDefault = false): void {
    this.cookingSkill = 0;
    this.cookingSkillBadgeClass = 'badge-light';
    // this.imgurAPI.forEach(r => r.isCookable = cookableDefault);
  }

}
