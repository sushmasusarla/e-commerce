import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenswearComponent } from './menswear.component';

describe('MenswearComponent', () => {
  let component: MenswearComponent;
  let fixture: ComponentFixture<MenswearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenswearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
