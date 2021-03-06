import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MissionNpcComponentComponent } from './mission-npc-component.component';

describe('MissionNpcComponentComponent', () => {
  let component: MissionNpcComponentComponent;
  let fixture: ComponentFixture<MissionNpcComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionNpcComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionNpcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
