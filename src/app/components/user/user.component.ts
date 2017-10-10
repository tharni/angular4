import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Steve';
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;
  constructor(private dataService:DataService) { 
    console.log("constructor ran");
  }

  ngOnInit() {
    this.name = 'John';
    this.age = 30;
    this.address = {
      street:'50 Main st',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['write code','Watch movies', 'Listen to music'];
    
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Ezhil';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number;
  title:string;
  body:string;
  userId:number;
}
