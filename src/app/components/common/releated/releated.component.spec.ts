import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleatedComponent } from './releated.component';

describe('ReleatedComponent', () => {
  let component: ReleatedComponent;
  let fixture: ComponentFixture<ReleatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReleatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
