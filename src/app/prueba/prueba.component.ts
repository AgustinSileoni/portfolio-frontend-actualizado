import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {

  showEdit=false;
  text:string="Campeon del mundo";
  entrada:string = this.text;

  state_edit:boolean=true;

  @Output() messageEvent = new EventEmitter<boolean>();

  onEdit(){
    this.showEdit=true;
  }

  onSave(){
    this.showEdit= false;
    this.text = this.entrada;
  }

  sendMessage(){
    this.messageEvent.emit(this.state_edit);
  }

}
