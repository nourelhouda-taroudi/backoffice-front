import { TransferStatus } from '../enums/transfer-status.enum';
import { Fees } from './fees.model';

export class Transfer {
  id!: number | null;
  amount!: number | null;
  reference!: string;
  transferAmount!: number | null;
  operationAmount!: number | null;
  status: TransferStatus | null = 0;
  type!: string | null;
  createdAt!: boolean | null;
  unblockedAt!: boolean | null;
  notified!: boolean | null;
  enabled!: boolean | null;
  agentId!: number | null;
  backOfficeId!: number | null;
  clientId!: number | null;
  beneficiary!: number | null;
  fees!: Fees | null;
}
