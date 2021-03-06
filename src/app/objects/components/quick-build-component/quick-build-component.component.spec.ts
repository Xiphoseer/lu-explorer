import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickBuildComponentComponent } from './quick-build-component.component';

describe('QuickBuildComponentComponent', () => {
  let component: QuickBuildComponentComponent;
  let fixture: ComponentFixture<QuickBuildComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBuildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBuildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
