import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SironeComponent } from './sirone.component';

describe('SironeComponent', () => {
  let component: SironeComponent;
  let fixture: ComponentFixture<SironeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SironeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SironeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
