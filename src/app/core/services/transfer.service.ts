import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/constants';
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
  getAllTransfers() {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.ALL}`,
      {
        method: 'GET',
      }
    );
  }
  getAllBlockedTransfers() {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.ALL_LOCKED}`,
      { method: 'GET' }
    );
  }

  /**
   * Block transfer by id
   * @param transferId
   */
  // blockTransfer(transferId: string | number): Observable<any> {
  //   console.log({transferId});
  //   const res = this.http.post<any>(
  //     `${environment.BASE_URL_BACKOFFICE}/${PATHS.BACKOFFICE.TRANSFERS.LOCK}/${transferId}`,
  //     {}
  //   );
  //   return res;
  // }

  // Using fetch
  async blockTransfer(transferId: string | number) {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.LOCK}/${transferId}`,
      { method: 'POST' }
    );
  }

  /**
   * Unblock transfer by id
   * @param transferId
   */
  unblockTransfer(transferId: string | number) {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.UNLOCK}/${transferId}`,
      { method: 'POST' }
    );
  }

  /**
   * Return transfer by id
   * @param transferId
   */
  returnTransfer(transferId: string | number, raison: string, canalId: string) {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.RETURN}?canalId=${canalId}&reference=${transferId}`,
      {
        method: 'POST',
      }
    );
  }

  getTransferByReference(refernce: string) {
    return fetch(
      `${environment.BASE_URL_BACKOFFICE_SETTINGS}/${PATHS.BACKOFFICE.TRANSFERS.BY_REF}/${refernce}`,
      { method: 'GET' }
    );
  }
}
