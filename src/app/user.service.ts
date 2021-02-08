import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-class/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUrl = "https://api.github.com/users"
  constructor(private http:HttpClient) { }

 
  }

