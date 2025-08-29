import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDownloadComponent } from './asset-download.component';

describe('AssetDownloadComponent', () => {
  let component: AssetDownloadComponent;
  let fixture: ComponentFixture<AssetDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
