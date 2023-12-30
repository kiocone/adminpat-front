import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";
import { environment } from "src/environment/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private httpHeaders: HttpHeaders;
  
  constructor(
    private http: HttpClient,
  ){
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  getUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
      `${environment.API_URL}/users`,
      {
        headers: this.httpHeaders,
        observe: 'response'
      }
    )
  }

  createUser(user: any): Observable<HttpResponse<any>> {
    return this.http.post(
      `${environment.API_URL}/users`,
      user, 
      {
        headers: this.httpHeaders,
        observe: 'response'
      }
    )
  }

  getUserbyId(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(
     `${environment.API_URL}/users/${id}`,
     {
      headers: this.httpHeaders,
      observe: 'response'
     }
    )
  }

  updateUserById(id: number, user: any): Observable<HttpResponse<any>> {
    return this.http.put(
      `${environment.API_URL}/users/${id}`,
      user, 
      {
        headers: this.httpHeaders,
        observe: 'response'
      }
    )
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(
      `${environment.API_URL}/users/${id}`,
      {
        headers: this.httpHeaders,
        observe: 'response'
      }
    )
  }
}