import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  url="http://localhost:3000";


  
  constructor(private http:HttpClient) { }

  async Add(formData){
    return this.http.post(`${this.url}/users/callApi`, formData).toPromise();

  }

  async getUser(){
    return this.http.get(`${this.url}/users/getData`).toPromise();

  }

  async deleteData(id){
    return this.http.delete(`${this.url}/users/deleteSpecific/${id}`).toPromise();

  }
  
}
