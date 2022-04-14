import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProfileComponent } from './banner-profile.component';

describe('BannerProfileComponent', () => {
  let component: BannerProfileComponent;
  let fixture: ComponentFixture<BannerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
