import { sha256 } from 'js-sha256';

export const comparePin = (pin: string, hashedPin: string) => sha256(pin) === hashedPin;
export const hashPin = (pin: string) => sha256(pin);

