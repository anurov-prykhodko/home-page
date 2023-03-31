import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfHomePageComponent } from './hf-home-page.component';

describe('HfHomePageComponent', () => {
  let component: HfHomePageComponent;
  let fixture: ComponentFixture<HfHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
