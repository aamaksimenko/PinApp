import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { selectorIsLogin } from '../../redux/pinSlice';

import style from './Home.module.css';

export function Home() {
  const isLogin = useAppSelector(selectorIsLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/pin');
    }
  }, []);

  return (
    <section className={style.wrapper}>
      <p className={style.title}>Home</p>
    </section>
  );
}
