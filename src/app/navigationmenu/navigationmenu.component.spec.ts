import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationmenuComponent } from './navigationmenu.component';

describe('NavigationmenuComponent', () => {
  let component: NavigationmenuComponent;
  let fixture: ComponentFixture<NavigationmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
