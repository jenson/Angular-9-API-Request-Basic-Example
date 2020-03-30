import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoadDataService {

  api_url:string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http:HttpClient) { 
  }

  getApiData(): Observable<any> {
    return this.http.get<any>(`${this.api_url}`);
  }

}
