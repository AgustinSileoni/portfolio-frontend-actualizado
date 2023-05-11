import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  text:string = "Iniciar Sesion" 
  modo_edicion:boolean = false;

  @Output() buttonEvent = new EventEmitter<boolean>();

  iniciar_sesion(){
    if(this.modo_edicion){
      this.buttonEvent.emit(false);
      this.text = "Iniciar Sesion"
      this.modo_edicion= false;
      
    }
    else{
      this.buttonEvent.emit(true);
      this.text = "Salir"
      this.modo_edicion = true;
    }
      
  }


}
