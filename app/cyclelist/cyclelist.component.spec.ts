import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleListComponent } from './cycle-list-component.component';

describe('CycleListComponentComponent', () => {
  let component: CycleListComponent;
  let fixture: ComponentFixture<CycleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
