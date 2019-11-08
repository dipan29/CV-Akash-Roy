import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkashComponent } from './akash.component';

describe('AkashComponent', () => {
  let component: AkashComponent;
  let fixture: ComponentFixture<AkashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
