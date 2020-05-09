import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxwebReactiveFormComponent } from './rxweb-reactive-form.component';

describe('RxwebReactiveFormComponent', () => {
  let component: RxwebReactiveFormComponent;
  let fixture: ComponentFixture<RxwebReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxwebReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxwebReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
