import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitycreationComponent } from './communitycreation.component';

describe('CommunitycreationComponent', () => {
  let component: CommunitycreationComponent;
  let fixture: ComponentFixture<CommunitycreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitycreationComponent]
    });
    fixture = TestBed.createComponent(CommunitycreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
