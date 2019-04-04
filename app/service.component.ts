
import  {Injectable} from '@angular/core';
import {HttpClient} from'@angular/common/http'; 
import {IPost} from './post.component';
@Injectable()
export class Service{
    constructor(private http:HttpClient){}
    getpost(){
      return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts');
    }


}