import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarpersonalComponent } from './actualizarpersonal.component';

describe('ActualizarpersonalComponent', () => {
  let component: ActualizarpersonalComponent;
  let fixture: ComponentFixture<ActualizarpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
