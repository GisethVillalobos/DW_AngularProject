import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusUpdateComponent } from './bus-update.component';

describe('BusUpdateComponent', () => {
  let component: BusUpdateComponent;
  let fixture: ComponentFixture<BusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
