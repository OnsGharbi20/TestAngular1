import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_USERS= "/users"
  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_USERS)
  }

  deleteUser(id: any): any {
    return this.httpClient.delete(`${this.API_URL}/user/${id}`);
  }
  updateUser(id: any, updatedUserData: any): any {
    return this.httpClient.put(`${this.API_URL}/user/${id}`, updatedUserData);
  }
  addUser(userData: any): any {
    return this.httpClient.post(`${this.API_URL}/users`, userData);
  }
  
  
  

 

  


}
