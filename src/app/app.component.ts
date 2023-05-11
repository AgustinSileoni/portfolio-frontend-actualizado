import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-portfolio-actualizado';

  @Output() buttonEvent = new EventEmitter<boolean>();

  state_edit:boolean=false;
  edit: boolean= false;
  parentMessage:boolean=true;
  constructor(){}

  receiveMessage($event: boolean){
    this.state_edit = $event;
  }

  editar(){
    this.edit= !this.edit;
  }




}
