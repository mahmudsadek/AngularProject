import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifactionService {

  constructor(private _HttpClient:HttpClient) {
  }
  getNotifaction(id:string): Observable<any> {
    return this._HttpClient.get<any>(`http://localhost:5017/api/Notify/notify${id}`);
  }
}
