import React from "react";
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div>
      <h1>Рассчитайте стоимость <br /> автомобиля в лизинг</h1>
      <div className={style.items}>



        <div className={style.item}>
            <div className={style.price_avto}>
                <p>Стоимость автомобиля</p>
            </div>
            <div className={style.sum_agreement}>

            </div>
        </div>



        <div className={style.item}>
            <div className={style.first_payment}>

            </div>
            <div className={style.monthly_payment}>

            </div>

        </div>


        <div className={style.item}>
            <div className={style.date}>

            </div>
            <div className={style.btn}>

            </div>

        </div>

      </div>
      

    </div>
  );
};
