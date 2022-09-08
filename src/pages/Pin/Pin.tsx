import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  checkSavePin,
  savePin,
  setIsErrorPin,
  selectorIsErrorPin,
  selectorIsFirstLogin,
  selectorSavedPin,
} from '../../redux/pinSlice';
import {
  keys,
  inputDefaultValues,
  ERROR_MESSAGE,
  SET_PIN_MESSAGE,
  ENTER_PIN_MESSAGE,
} from '../../constants';
import { hashPin, comparePin } from '../../utils';

import styles from './Pin.module.css';

const getClassesKey = (value: string) =>
  value === '0' ? `${styles.keyPadButton} ${styles.zero}` : styles.keyPadButton;
const getClassesInput = (value: string, isFirstLogin: boolean) =>
  value && !isFirstLogin ? `${styles.pinInputItem} ${styles.fillItem}` : styles.pinInputItem;

export function Pin() {
  const [pin, setPin] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isFirstLogin = useAppSelector(selectorIsFirstLogin);
  const savedPin = useAppSelector(selectorSavedPin);
  const isErrorPin = useAppSelector(selectorIsErrorPin);

  useEffect(() => {
    const localPin = localStorage.getItem('pin');
    if (localPin) {
      dispatch(checkSavePin(localPin));
    }
  }, []);

  useEffect(() => {
    const isError = !comparePin(pin, savedPin);

    if (pin.length === 6 && isFirstLogin) {
      const hashedPin = hashPin(pin);
      dispatch(savePin(hashedPin));
      navigate('/home');
    }
    if (pin.length === 6 && !isFirstLogin && !isError) {
      navigate('/home');
    }
    if (pin.length === 6 && !isFirstLogin && isError) {
      dispatch(setIsErrorPin(isError));
      setPin('');
    }
  }, [pin]);

  const handleChangePin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.currentTarget.value === 'C') {
      setPin(pin.slice(0, -1));
      dispatch(setIsErrorPin(false));
      return;
    }
    if (pin.length < 6) {
      setPin(pin + event.currentTarget.value);
      if (isErrorPin) {
        dispatch(setIsErrorPin(false));
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pinInputCircles}>
        {inputDefaultValues.map((defaultValue, index) => (
          <div key={index} className={getClassesInput(pin[index], isFirstLogin)}>
            {pin[index] ?? defaultValue}
          </div>
        ))}
      </div>
      <div className={styles.infoBlock}>
        {isFirstLogin && <div className={styles.enterPin}>{SET_PIN_MESSAGE}</div>}
        {!isFirstLogin && !isErrorPin && <div className={styles.enterPin}>{ENTER_PIN_MESSAGE}</div>}
        {isErrorPin && <div className={styles.error}>{ERROR_MESSAGE}</div>}
      </div>
      <div className={styles.keypad}>
        {keys.map((key) => (
          <button
            key={key.value}
            className={getClassesKey(key.value)}
            onClick={handleChangePin}
            value={key.value}
          >
            <p className={styles.numbers}>{key.value}</p>
            <p className={styles.chars}>{key.chars?.join(' ')}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
