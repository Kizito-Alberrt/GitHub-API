import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from './user-class/user';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ProfileService {

  user?:User;
  private username:string;
  

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'Kizito-Alberrt';
  }

  getProfileInfo(){
  	return this.http.get(`https://api.github.com/users/${this.username}`)
    .pipe(map(res => res.json()));
  }

  getProfileRepos(){
  	return this.http.get(`https://api.github.com/users/${this.username}`)
  	.pipe(map(res => res.json()));
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
