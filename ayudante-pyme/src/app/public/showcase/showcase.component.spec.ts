
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
