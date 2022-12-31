import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Beneficiary} from '../models/beneficiary.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(
    private readonly http : HttpClient
  ) { }

  /**
   * Get all beneficiaries
   * @returns beneficiaries
   */
  getAllBeneficiries():Observable<Beneficiary[]>{
    return this.http.get<Beneficiary[]>(`${environment.BASE_URL_BACKOFFICE}/beneficiaries`);
  }
  
  /**
   * Block beneficiary by id
   * @param benficiaryId
   */
  blockBeneficiary(benficiaryId: string | number): Observable<any> {
    return this.http.put(
      `${environment.BASE_URL_BACKOFFICE}/beneficiaries/${benficiaryId}/block`,
      {}
    );
  }

  /**
   * Unblock transfer by id
   * @param benficiaryId
   */
  unblockBeneficiary(benficiaryId: string | number): Observable<any> {
    return this.http.put(
      `${environment.BASE_URL_BACKOFFICE}/beneficiaries/${benficiaryId}/unblock`,
      {}
    );
  }
}
