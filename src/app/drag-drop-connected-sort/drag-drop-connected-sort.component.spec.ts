import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropConnectedSortComponent } from './drag-drop-connected-sort.component';

describe('DragDropConnectedSortComponent', () => {
  let component: DragDropConnectedSortComponent;
  let fixture: ComponentFixture<DragDropConnectedSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropConnectedSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropConnectedSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
