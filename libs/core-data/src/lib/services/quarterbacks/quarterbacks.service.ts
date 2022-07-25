import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuarterbacksService {
  model = 'quarterbacks';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Quarterback[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Quarterback>(this.getUrlWithId(id));
  }

  create(quarterback: Quarterback) {
    return this.http.post(this.getUrl(), quarterback);
  }

  update(quarterback: Quarterback) {
    return this.http.put(this.getUrlWithId(quarterback.id), quarterback);
  }

  delete(quarterback: Quarterback) {
    return this.http.delete(this.getUrlWithId(quarterback.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
