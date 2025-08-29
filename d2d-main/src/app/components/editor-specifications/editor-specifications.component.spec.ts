import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSpecificationsComponent } from './editor-specifications.component';

describe('EditorSpecificationsComponent', () => {
  let component: EditorSpecificationsComponent;
  let fixture: ComponentFixture<EditorSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorSpecificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
