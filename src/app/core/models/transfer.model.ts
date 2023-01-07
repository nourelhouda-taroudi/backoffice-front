import { TransferStatus } from '../enums/transfer-status.enum';
import { Fees } from './fees.model';

export class Transfer {
  id!: number;
  amount!: number;
  reference!: string;
  transferAmount!: number;
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
  beneficiary!: number;
  fees!: Fees;
}
