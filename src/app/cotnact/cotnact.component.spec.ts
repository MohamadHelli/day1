import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotnactComponent } from './cotnact.component';

describe('CotnactComponent', () => {
  let component: CotnactComponent;
  let fixture: ComponentFixture<CotnactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotnactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotnactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
