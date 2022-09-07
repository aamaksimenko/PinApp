import { keyValue } from './constants';

type KeyValue = typeof keyValue[keyof typeof keyValue];

export type Key = {
  value: KeyValue;
  chars?: string[];
}

