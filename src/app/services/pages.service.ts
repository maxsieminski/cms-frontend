import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cms_defs } from '../defs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  public getPage<T>(pagePath: string) {
    return this.http.get<T>(`${cms_defs.backendUrl}/pages/${pagePath}`);
  }
}
