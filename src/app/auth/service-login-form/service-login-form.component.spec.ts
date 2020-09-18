import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLoginFormComponent } from './service-login-form.component';

describe('ServiceLoginFormComponent', () => {
  let component: ServiceLoginFormComponent;
  let fixture: ComponentFixture<ServiceLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
