import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly subject = new Subject<any>();

  constructor(private readonly http: HttpClient) {
    // Nothing
  }

  public changeSettingsSubscriber(): Observable<any> {
    return this.subject.asObservable();
  }

 

  public async createTest(data:any) {
    return this.http.post<any>(`${environment.url}/tests/CreateTest`, data).toPromise();
  }

  public async getTestsRecords(data:any) {
    return this.http.post<any>('/GetTests', data).toPromise();
  }
}
