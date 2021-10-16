import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersItemComponent } from './owners-item.component';

describe('OwnersItemComponent', () => {
  let component: OwnersItemComponent;
  let fixture: ComponentFixture<OwnersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
