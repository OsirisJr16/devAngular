import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantRootComponent } from './etudiant-root.component';

describe('EtudiantRootComponent', () => {
  let component: EtudiantRootComponent;
  let fixture: ComponentFixture<EtudiantRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantRootComponent]
    });
    fixture = TestBed.createComponent(EtudiantRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
