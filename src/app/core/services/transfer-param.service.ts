import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransferParam } from '../models/transfer-param.model';

@Injectable({
  providedIn: 'root',
})
export class TransferParamService {
  constructor(private http: HttpClient) {}

  getAllParams(): Observable<TransferParam[]> {
    return this.http.get<TransferParam[]>(
      `${environment.BASE_URL_BACKOFFICE}/param/all`
    );
  }

  updateParam(param: TransferParam): Observable<TransferParam> {
    return this.http.put<TransferParam>(
      `${environment.BASE_URL_BACKOFFICE}/param/${param.id}`,
      param
    );
  }
}
