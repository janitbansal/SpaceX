import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { program } from '../model/spaceProgram.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http: HttpClient) { }
  fetchAllPrograms(filters):Observable<program[]>{
    let params = new HttpParams();
    params = params.append('limit', '100');
    if (filters && filters.year!=='') {
      params = params.append('launch_year', filters.year);
    }
    if (filters && filters.land !== '') {
      params = params.append('land_success', filters.land);
    }
    if (filters && filters.launch!=='') {
      params = params.append('launch_success', filters.launch);
    }
    return this.http.get<program[]>('https://api.spacexdata.com/v3/launches', {params})
  }
}
