import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropFirebaseComponent } from './drag-drop-firebase.component';

describe('DragDropFirebaseComponent', () => {
  let component: DragDropFirebaseComponent;
  let fixture: ComponentFixture<DragDropFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
