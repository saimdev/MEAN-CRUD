import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  userData:any;
  constructor(private route: ActivatedRoute, private usersData:UsersDataService){
    this.usersData.getUserData(this.route.snapshot.paramMap.get('userId')).subscribe((data)=>{
      console.log(data);
      this.userData=data;
      console.warn(this.userData);
    })
  }
  updateUserData(userId:any, data:any){
    this.usersData.updateData(userId, data).subscribe(
      (result) => {
        console.warn(result);
        alert('Record Updated successfully!');
        // window.location.reload();
      },
      (error) => {
        console.error(error);
        alert('Error updating data. Please try again.');
      }
    )
  }
}
