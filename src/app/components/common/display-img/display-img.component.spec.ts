import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImgComponent } from './display-img.component';

describe('DisplayImgComponent', () => {
  let component: DisplayImgComponent;
  let fixture: ComponentFixture<DisplayImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
