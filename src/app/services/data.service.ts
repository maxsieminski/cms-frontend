import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cms_defs } from '../defs';
import { cms_types } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pages: cms_types.api.PageResponse[] = [];

  constructor(private http: HttpClient) { }

  // Getters

  getData<T>(query: string, id?: number): Observable<T> {
    return this.http.get<T>(`${cms_defs.backendUrl}/${query}${id ? `/${id}` : ''}`);
  }

  public getPages(): Observable<cms_types.api.PageResponse[]> {
    return this.getData<cms_types.api.PageResponse[]>('pages');
  }

  public getPage(pageId: number): Observable<cms_types.api.PageResponse> {
    return this.getData<cms_types.api.PageResponse>('pages', pageId);
  }

  public getSections(pageId: number): Observable<cms_types.api.SectionResponse[]> {
    return this.getData<cms_types.api.SectionResponse[]>(`pages/${pageId}/sections`);
  }

  public getSection(sectionId: number): Observable<cms_types.api.SectionResponse> {
    return this.getData<cms_types.api.SectionResponse>('sections', sectionId);
  }

  public getComponents(sectionId: number): Observable<cms_types.api.ComponentResponse[]> {
    return this.getData<cms_types.api.ComponentResponse[]>(`sections/${sectionId}/components`);
  }

  public getComponent(componentId: number): Observable<cms_types.api.ComponentResponse> {
    return this.getData<cms_types.api.ComponentResponse>('components', componentId);
  }

  public getComponentsCategories(): Observable<cms_types.api.ComponentCategoryResponse[]> {
    return this.getData<cms_types.api.ComponentCategoryResponse[]>('components/categories/');
  }

  public getParagraphs(componentId: number): Observable<cms_types.api.ParagraphResponse[]> {
    return this.getData<cms_types.api.ParagraphResponse[]>(`components/${componentId}/paragraphs`);
  }

  public getParagraph(paragraphId: number): Observable<cms_types.api.ParagraphResponse> {
    return this.getData<cms_types.api.ParagraphResponse>('paragraphs', paragraphId);
  }


  // Setters

  public createData<T>(query: string, entity: T): Observable<T> {
    console.log(`${cms_defs.backendUrl}/${query}`);
    return this.http.post<T>(`${cms_defs.backendUrl}/${query}`, entity);
  }


  // Patchers

  public patchData<T>(query: string, id: number, entity: T): Observable<T> {
    return this.http.patch<T>(`${cms_defs.backendUrl}/${query}/${id}`, entity);
  }

  public deleteData<T>(query: string, id: number): Observable<T> {
    return this.http.delete<T>(`${cms_defs.backendUrl}/${query}/${id}`);
  }
}
