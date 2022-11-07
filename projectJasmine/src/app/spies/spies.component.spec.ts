import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SpiesComponent } from './spies.component';

describe('SpiesComponent', () => {
  let component: SpiesComponent;
  let fixture: ComponentFixture<SpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const calculadora = {
    somar: function (n1:number, n2:number) { return n1+n2; }
  }

  beforeAll(()=>{ spyOn(calculadora,'somar').and.callThrough() });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call somar method at least one time', () => {
    calculadora.somar(100,200);
    expect(calculadora.somar).toHaveBeenCalled();
  });

  it('should call somar method and check result value', () => {
    let valorSoma = calculadora.somar(100,200);
    expect(valorSoma).toEqual(300);
  });

});
