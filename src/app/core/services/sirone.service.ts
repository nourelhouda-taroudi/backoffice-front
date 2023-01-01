import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sirone } from '../models/sirone.model';

@Injectable({
  providedIn: 'root',
})
export class SironeService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get sirone list
   * @returns sirone list
   */
  getSironeList(): Observable<Sirone[]> {
    return this.http.get<Sirone[]>(
      environment.BASE_URL_BACKOFFICE + '/sirone/all'
    );
  }

  /**
   * Unblock sirone by id
   * @param sironeyId
   */
  unblockBeneficiary(sironeyId: string | number): Observable<any> {
    // ! I think this endpoint is like TaransferService unblockBeneficiary methode
    return this.http.put(
      `${environment.BASE_URL_BACKOFFICE}/sirone/${sironeyId}/unblock`,
      {}
    );
  }
}
