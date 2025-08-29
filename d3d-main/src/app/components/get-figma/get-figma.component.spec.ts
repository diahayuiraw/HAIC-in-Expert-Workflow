import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFigmaComponent } from './get-figma.component';

describe('GetFigmaComponent', () => {
  let component: GetFigmaComponent;
  let fixture: ComponentFixture<GetFigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetFigmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetFigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
