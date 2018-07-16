import { TestBed, inject } from '@angular/core/testing';

import { RecipeserviceService } from './recipeservice.service';

describe('RecipeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeserviceService]
    });
  });

  it('should be created', inject([RecipeserviceService], (service: RecipeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
