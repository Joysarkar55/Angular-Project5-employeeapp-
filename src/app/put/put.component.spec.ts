import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUTComponent } from './put.component';

describe('PUTComponent', () => {
  let component: PUTComponent;
  let fixture: ComponentFixture<PUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PUTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
