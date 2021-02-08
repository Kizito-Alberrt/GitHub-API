import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile?:any[];
  repos?: any[];
  username: "string" = "string";

  constructor(private profileService: ProfileService) { 

  }

  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe((profile: any[] | undefined) => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe((repos: any[] | undefined) => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}
