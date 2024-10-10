import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUpdateComponent } from './route-update.component';

describe('RouteUpdateComponent', () => {
  let component: RouteUpdateComponent;
  let fixture: ComponentFixture<RouteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
