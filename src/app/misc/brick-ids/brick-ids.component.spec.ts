import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrickIdsComponent } from './brick-ids.component';

describe('BrickIdsComponent', () => {
  let component: BrickIdsComponent;
  let fixture: ComponentFixture<BrickIdsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
