import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsReadyDevSelectComponent } from './components-ready-dev-select.component';

describe('ComponentsReadyDevSelectComponent', () => {
  let component: ComponentsReadyDevSelectComponent;
  let fixture: ComponentFixture<ComponentsReadyDevSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsReadyDevSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsReadyDevSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
