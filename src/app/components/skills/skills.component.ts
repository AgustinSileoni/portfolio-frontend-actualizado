import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 
  html_por = 0;
  javascript_por=0;
  react_por=0;
  angular_por=0;
  ngOnInit():void{

    let counter:number=0;
    setInterval(()=>{
      if(counter>100){
        clearInterval(counter);
      }
      else{
        counter+=1;
        if (this.html_por<65){
          this.html_por = this.html_por + 1 ;
        }
        if (this.javascript_por<70){
          this.javascript_por = this.javascript_por + 1 ;
        }
        if (this.react_por<60){
          this.react_por = this.react_por + 1 ;
        }
        if (this.angular_por<75){
          this.angular_por = this.angular_por + 1 ;
        }
        
      }
      
    },30)

  } 

}
