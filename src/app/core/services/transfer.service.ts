import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private http: HttpClient) {}

  /**
   * Get all transfers
   * @returns transfers
   */
  getAllTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(
      `${environment.BASE_URL_BACKOFFICE}/transfers`
    );
  }

  /**
   * Block transfer by id
   * @param transferId
   */
  blockTransfer(transferId: string | number): Observable<any> {
    return this.http.put(
      `${environment.BASE_URL_BACKOFFICE}/transfers/${transferId}/block`,
      {}
    );
  }

  /**
   * Unblock transfer by id
   * @param transferId
   */
  unblockTransfer(transferId: string | number): Observable<any> {
    return this.http.put(
      `${environment.BASE_URL_BACKOFFICE}/transfers/${transferId}/unblock`,
      {}
    );
  }
}
