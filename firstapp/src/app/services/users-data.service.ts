import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get('http://localhost:5000/getData')
  }

  saveUsers(data:any){
    return this.http.post('http://localhost:5000/register', data, { headers: { 'Content-Type': 'application/json' } });
  }

  deleteUser(userId:any){
    return this.http.delete(`http://localhost:5000/deleteUser/${userId}`)
  }

  getUserData(userId:any){
    return this.http.get(`http://localhost:5000/getUser/${userId}`)
  }

  updateData(userId:any, data:any){
    return this.http.patch(`http://localhost:5000/updateUser/${userId}`, data,{ headers: { 'Content-Type': 'application/json' } })
  }
}
