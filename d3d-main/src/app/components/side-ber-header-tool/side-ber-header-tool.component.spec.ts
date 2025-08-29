import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBerHeaderToolComponent } from './side-ber-header-tool.component';

describe('SideBerHeaderToolComponent', () => {
  let component: SideBerHeaderToolComponent;
  let fixture: ComponentFixture<SideBerHeaderToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBerHeaderToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBerHeaderToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
