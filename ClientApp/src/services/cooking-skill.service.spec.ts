import { TestBed } from '@angular/core/testing';

import { CookingSkillService } from './cooking-skill.service';

describe('CookingSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookingSkillService = TestBed.get(CookingSkillService);
    expect(service).toBeTruthy();
  });
});
