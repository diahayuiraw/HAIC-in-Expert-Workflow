import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaHeaderComponent } from './figma-header.component';

describe('FigmaHeaderComponent', () => {
  let component: FigmaHeaderComponent;
  let fixture: ComponentFixture<FigmaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigmaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigmaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
