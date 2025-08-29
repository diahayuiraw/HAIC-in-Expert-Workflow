import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTsComponent } from './editor-ts.component';

describe('EditorTsComponent', () => {
  let component: EditorTsComponent;
  let fixture: ComponentFixture<EditorTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
