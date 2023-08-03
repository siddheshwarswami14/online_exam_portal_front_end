import { TestBed } from '@angular/core/testing';

import { NoramlGuard } from './noraml.guard';

describe('NoramlGuard', () => {
  let guard: NoramlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoramlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
