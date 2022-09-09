import { Key } from './types';

export const ERROR_MESSAGE = 'Wrong pin code'
export const SET_PIN_MESSAGE = 'Set pin code'
export const ENTER_PIN_MESSAGE = 'Enter pin code'

export const keyValue = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
  reset: 'C',
} as const;

export const navigation = {
  pin: '/pin',
  home: '/home'
}

export const inputDefaultValues = ['', '', '', '', '', ''];

export const keys: Key[] = [
  {
    value: keyValue.one,
  },
  {
    value: keyValue.two,
    chars: ['A', 'B', 'C'],
  },
  {
    value: keyValue.three,
    chars: ['D', 'E', 'F'],
  },
  {
    value: keyValue.four,
    chars: ['G', 'H', 'I'],
  },
  {
    value: keyValue.five,
    chars: ['J', 'K', 'L'],
  },
  {
    value: keyValue.six,
    chars: ['M', 'N', 'O'],
  },
  {
    value: keyValue.seven,
    chars: ['P', 'Q', 'R', 'S'],
  },
  {
    value: keyValue.eight,
    chars: ['T', 'U', 'V'],
  },
  {
    value: keyValue.nine,
    chars: ['W', 'X', 'Y', 'Z'],
  },
  {
    value: keyValue.zero,
  },
  {
    value: keyValue.reset,
  },
];