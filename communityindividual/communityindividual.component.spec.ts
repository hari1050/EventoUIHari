import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityindividualComponent } from './communityindividual.component';

describe('CommunityindividualComponent', () => {
  let component: CommunityindividualComponent;
  let fixture: ComponentFixture<CommunityindividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityindividualComponent]
    });
    fixture = TestBed.createComponent(CommunityindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
