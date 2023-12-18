import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyAppService } from 'src/app/services/my-app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MyAppService]
})
export class UserComponent implements OnInit {

  users: any

  constructor(private router:Router) { }


  // constructor(private myAppService : MyAppService) { }

  // ngOnInit(): void {
  //     console.log('here into users')
  //     this.myAppService.getUsers().subscribe( (datas) => {
  //       this.users= datas;
  //     }

  //     )
  // }

  ngOnInit(): void {

    this.getAllUsers()
  
    }

    getAllUsers(){
      this.users=JSON.parse(localStorage.getItem("users") || '[]')
    }
  
    deleteUser(id:any){
      for(let i =0 ;i<this.users.length;i++){
        if(this.users[i].id==id){
          this.users.splice(i,1);
        }
      }
      localStorage.setItem('users',JSON.stringify(this.users))
    }
  

    editUser(id:any){
      for(let i =0 ;i<this.users.length;i++){
        if(this.users[i].id==id){
          this.users[i].edit= !this.users[i].edit;
          if(this.users[i].edit){
            localStorage.setItem('users',JSON.stringify(this.users))
          }
        }
      }
    }

}
