import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { TransferParam } from '../models/transfer-param.model';

@Injectable({
  providedIn: 'root',
})
export class TransferParamService {
  constructor(private http: HttpClient) {}

  getAllParams() {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.SETTINGS.ALL}`,
      {
        method:'GET',
      }
    ).then(res=>res.json())
  }

  updateParam(param: TransferParam) {
    const formData = new FormData();
    formData.append('id', '' + param.id);
    formData.append('name', param.name);
    formData.append('value', '' + param.value);
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.SETTINGS.UPDATE}`,
      {
        method: 'PUT',
        body: formData,
      }
    );
  }
}
