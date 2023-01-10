import { TransferStatus } from '../enums/transfer-status.enum';
import { Fees } from './fees.model';

export class Transfer {
  _id!: string;
  amount!: number;
  reference!: string;
  totalAmount!: number;
  operationAmount!: number;
  status!: TransferStatus;
  type!: string;
  createdAt!: Date;
  unblockedAt!: Date;
  notified!: boolean;
  enabled!: boolean;
  agentId!: number;
  backOfficeId!: number;
  clientId!: number;
  clientFullName!:string;
  beneficiaryFirstName!: string;
  fees!: Fees;
}
