import GSE from './gse-coord';

export interface Observatory {
  id: string;
  name: string;
  resolution: number;
  startTime: string;
  endTime: string;
  resourceId?: string;
  coordinates?: GSE[];
}
