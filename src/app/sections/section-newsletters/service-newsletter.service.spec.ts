import { TestBed } from '@angular/core/testing';

import { ServiceNewsletterService } from './service-newsletter.service';

describe('ServiceNewsletterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceNewsletterService = TestBed.get(ServiceNewsletterService);
    expect(service).toBeTruthy();
  });
});
