import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'projectJasmine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('projectJasmine');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('projectJasmine app is running!');
  });
  it('should test toBe matcher', () => {
    var carro = {marca:"GM"};
    var van = {marca:"GM"}
    expect(carro).not.toBe(van);
  });

  it('should test toEqual matcher', () => {
    let carroErnesto = "Mercedes GLA"
    let carroFelipe = "Mercedes GLA"
    expect(carroErnesto).toEqual(carroFelipe);
  });

  // it('should test and fail toEqual matcher', () => {
  //   let carroErnesto = "Lancer"
  //   let carroFelipe = "Mercedes GLA"
  //   expect(carroErnesto).toEqual(carroFelipe);
  // });

  it('should test toMatch matcher', () => {
    let expressao = 'Lancer EVO Jonh Easton'
    expect(expressao).toMatch(/Jonh Easton/);
  });

  it('should test toBeUndefined matcher', () => {
    let expressao;
    expect(expressao).toBeUndefined();
  });

  it('should test toBeUndefined matcher', () => {
    let expressao = 'texto'
    expect(expressao).toBeDefined();
  });

  function testeRetorno(x:number, y:number){
    if(x<y){
      return true
    }
    else return false
  }

  it('should test toBeTruthy matcher', () => {
    let valor = true
    expect(testeRetorno(5,10)).toBeTruthy();
  });

  it('should test toBeFalse matcher', () => {
    let valor = false
    expect(valor).toBeFalse();
  });

  it('should test toContain matcher', () => {
    const umArray = ['McLaren', 'Ferrari', 'Ligier', 'Fittipaldi']
    expect(umArray).toContain('Fittipaldi');
  });

  function testeMaiorMenor(x:number, y:number){
    if(x<y){
      return true
    }
    else return false
  }

  it('should test toBeGreaterThan matcher', () => {
    let a = 7
    let b = 14
    expect(b).toBeGreaterThan(a);
  });

  it('should test toBeGreaterThan matcher', () => {
    let a = 7
    let b = 14
    expect(a).toBeLessThan(b);
  });



});

