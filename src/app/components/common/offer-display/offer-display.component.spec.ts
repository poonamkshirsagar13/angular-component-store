import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDisplayComponent } from './offer-display.component';

describe('OfferDisplayComponent', () => {
  let component: OfferDisplayComponent;
  let fixture: ComponentFixture<OfferDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
