import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdateComponent } from './tabdate.component';

describe('TabdateComponent', () => {
  let component: TabdateComponent;
  let fixture: ComponentFixture<TabdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
