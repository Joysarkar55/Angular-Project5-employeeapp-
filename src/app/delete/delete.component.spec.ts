import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELETEComponent } from './delete.component';

describe('DELETEComponent', () => {
  let component: DELETEComponent;
  let fixture: ComponentFixture<DELETEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELETEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DELETEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
