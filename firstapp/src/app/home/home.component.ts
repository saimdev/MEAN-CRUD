import { Component } from '@angular/core';
import {UsersDataService} from "../services/users-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any;
  constructor(private usersData:UsersDataService){
    this.usersData.users().subscribe((data)=>{
      this.users=data;
      console.warn(this.users)
    })
  }
  getUserFormData(data:any){
    this.usersData.saveUsers(data).subscribe(
      (result) => {
        console.warn(result);
        alert('New record registered successfully!');
        // window.location.reload();
      },
      (error) => {
        console.error(error);
        alert('Error registering new record. Please try again.');
      }
    );
  }

  deleteUserData(userId:any){
    this.usersData.deleteUser(userId).subscribe((result)=>{
      console.warn(result);
    })
  }

}
