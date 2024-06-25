import React from 'react';
import {NavLink} from 'react-router-dom';

const RatesBar = () => {
  return (
    <>
      <h3 className="mt-5">
        Тарифные планы
      </h3>
      <p>
        Пакетное предложение «Интернет+ТВ» — это скоростной безлимитный Интернет от Мега-Лайна и более 210 цифровых каналов от компании «Цифровые решения плюс» в одном пакете! Подключайтесь и получите удовольствие от современного центра домашних развлечений.
        Качество нашего цифрового телевидения не зависит от загрузки Вашего Интернет канала и всегда остается высоким, т.к. услуги предоставляются по отдельным каналам связи.
      </p>
      <div className="d-flex flex-column mb-5">
        <div className="card mb-3">
          <div className="card-header fs-4 text-center bg-info text-white">
            <i className="bi bi-check-lg fs-4">&#x20;</i>
            MegaHit
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-wifi">&#x20;</i>
              Скорость интернета, до 100 мбит/с, более 210 каналов
            </h5>
            <p className="card-text">Тарифный план доступен только для абонентов, проживающих в многоквартирных домах и жилых домах частного сектора. Полный пакет ТВ каналов</p>
            <NavLink to="/form" className="btn btn-info text-white">Подключить</NavLink>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header fs-4 text-center bg-info text-white">
            <i className="bi bi-check-lg fs-4">&#x20;</i>
            MegaPro
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-wifi">&#x20;</i>
              Скорость интернета, до 200 мбит/с, более 210 каналов
            </h5>
            <p className="card-text">Тарифный план доступен только для абонентов, проживающих в многоквартирных домах и жилых домах частного сектора. Полный пакет ТВ каналов</p>
            <NavLink to="/form" className="btn btn-info text-white">Подключить</NavLink>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header fs-4 text-center bg-info text-white">
            <i className="bi bi-check-lg fs-4">&#x20;</i>
            MegaULTRA
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-wifi">&#x20;</i>
              Скорость интернета, до 300 мбит/с, более 210 каналов
            </h5>
            <p className="card-text">Данный тарифный план доступен для клиентов, проживающих как в многоквартирных домах, так и в жилых домах частного сектора, при наличии технической возможности. Подключение к тарифному плану рассматривается на индивидуальной основе для каждого клиента.</p>
            <NavLink to="/form" className="btn btn-info text-white">Подключить</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatesBar;