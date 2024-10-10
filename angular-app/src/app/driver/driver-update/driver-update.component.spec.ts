import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverUpdateComponent } from './driver-update.component';

describe('DriverUpdateComponent', () => {
  let component: DriverUpdateComponent;
  let fixture: ComponentFixture<DriverUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
