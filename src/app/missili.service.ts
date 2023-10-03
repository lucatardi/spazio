import { Injectable } from '@angular/core';
import { Missile } from './missile/missile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MissiliService {
  constructor(
    private http: HttpClient) { }
  getMissili(): Observable<Missile[]> {
    return this.http.get<Missile[]>('https://api.spacexdata.com/v4/rockets')
  }
}
