import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectJasmine';
}


function testeRetorno(x:number, y:number){
  // x = 15;
  // y = 10;
  if(x<y){
    return true
  }
  else return false
}
console.log(testeRetorno(15,10));

