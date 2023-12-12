import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWithSearchButtonComponent } from './home-with-search-button.component';

describe('HomeWithSearchButtonComponent', () => {
  let component: HomeWithSearchButtonComponent;
  let fixture: ComponentFixture<HomeWithSearchButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWithSearchButtonComponent]
    });
    fixture = TestBed.createComponent(HomeWithSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
