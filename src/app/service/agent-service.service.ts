import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


const BASIC_URL=["http://localhost:8090"];


@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor(private http:HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/agent/clients")
      .pipe(
        catchError(error => {
          console.error('Error fetching customers:', error);
          return throwError(error); // Re-throw the error to propagate it downstream
        })
      );
  }

  createClient(client:any):Observable<any> {
    return this.http.post(BASIC_URL+"/api/agent/clientwithBA",client);
}

deleteClient(numTel:number):Observable<any> {
  return this.http.delete(BASIC_URL+"/api/agent/DeleteClient/"+numTel);
}


}
