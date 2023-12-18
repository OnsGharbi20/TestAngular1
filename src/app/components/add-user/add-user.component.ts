import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm !: FormGroup
  user:any={}
  
  constructor() { }

  ngOnInit(): void {
  }
 

  addUser(){ 
  let T=JSON.parse(localStorage.getItem('users') || '[]')
   this.user.id=T.length == 0 ? 0 : T.at(-1).id +1
   T.push(this.user)
   localStorage.setItem("users",JSON.stringify(T))
  }

}
