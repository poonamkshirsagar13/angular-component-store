import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferImgComponent } from './offer-img.component';

describe('OfferImgComponent', () => {
  let component: OfferImgComponent;
  let fixture: ComponentFixture<OfferImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
