import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() 
  set mensaje(valor:boolean){
    this.showEdit=valor;
  }


  showEdit= false;
  showEditBtn = false;
  name:string="Campeon del mundo";
  entrada:string = this.name;
  fecha_nacimiento: string= "1998-02-12";
  entrada_birthday:Date= new Date(this.fecha_nacimiento);
  

  onEdit(){
    this.showEdit = true;
  }

  onSave(){
    this.showEdit= false;
    this.name= this.entrada;
    this.fecha_nacimiento = this.entrada_birthday.toLocaleString();
  }
  
  comenzar_edicion($event: boolean){
    this.showEdit = $event;
  }
  

}
