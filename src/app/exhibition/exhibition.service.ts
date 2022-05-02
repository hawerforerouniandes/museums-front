import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Exhibition } from './exhibition';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

private apiUrl: string = environment.baseUrl + 'museums/';

constructor(private http: HttpClient) { }

  getExhibitions(museum: any): Observable<Exhibition[]> {
    var urn = museum+"/exhibitions";
    return this.http.get<Exhibition[]>(this.apiUrl+urn);
  }

  getExhibition(museum: number, id: number): Observable<Exhibition> {
    var urn = museum+"/exhibitions/"+id;
    return this.http.get<Exhibition>(this.apiUrl+urn);
  }
}
