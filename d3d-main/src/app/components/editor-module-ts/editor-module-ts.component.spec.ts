import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorModuleTsComponent } from './editor-module-ts.component';

describe('EditorModuleTsComponent', () => {
  let component: EditorModuleTsComponent;
  let fixture: ComponentFixture<EditorModuleTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorModuleTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorModuleTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
