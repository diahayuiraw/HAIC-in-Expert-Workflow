import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAnatomySpecificationsComponent } from './assets-anatomy-specifications.component';

describe('AssetsAnatomySpecificationsComponent', () => {
  let component: AssetsAnatomySpecificationsComponent;
  let fixture: ComponentFixture<AssetsAnatomySpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetsAnatomySpecificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetsAnatomySpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
