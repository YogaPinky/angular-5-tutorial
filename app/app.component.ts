import { Component } from '@angular/core';
import {Service} from './service.component'; 
import {IPost} from './post.component';
import {HttpClient} from'@angular/common/http'; 
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service],
  
})
export class AppComponent {

constructor(private service:Service){}
  
 datas:[];
  ngOnInit(){
    this.service.getpost().subscribe(data=>{console.log(data.id);
    this.datas=data;
   });
  }
}
