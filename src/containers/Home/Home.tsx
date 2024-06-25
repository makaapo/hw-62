import React from 'react';
import banner1 from '../../assets/Banner-1.png';
import banner2 from "../../assets/Banner-2.png";
import banner3 from "../../assets/Banner-3.png";
import RatesBar from '../../components/RatesBar/RatesBar';
import {NavLink} from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-4 text-info">Интернет провайдер "Мега-лайн"</h1>
        <span className="fw-bold">
        <i className="bi bi-router">&#x20;</i>
        Настоящий безлимитный Интернет
      </span>
        <p>
          В наших тарифах нет скрытых лимитов, пакетов и ограничений, в отличие от большинства других провайдеров.
          Подключая доступ в Интернет вы всегда будете работать на высокой и комфортной скорости, вне зависимости от
          того,
          сколько трафика вы скачали до этого. Скорость зависит только от выбранного вами тарифа. Мы предлагаем удобные
          домашние решения, как для одного пользователя с одним компьютером, так и для нескольких пользователей и
          одновременного доступа в Интернет с нескольких компьютеров, планшетов, смартфонов и любых устройств,
          поддерживающих технологию Wi-Fi или имеющих Ethernet-порт.
        </p>
        <span className="fw-bold">
        <i className="bi bi-ethernet">&#x20;</i>
        Технологии будущего уже сейчас у вас дома
      </span>
        <p>
          Абонентам нашей сети всегда доступно подключение дополнительных сервисов IPTV, домашней фиксированной или
          IP-телефонии, приобретение и установка дополнительных абонентских устройств (Wi-Fi роутеры, приставки).
          Современные технологии у вас дома это не только экономия времени и денег, но и простота и удобство в
          использовании.
        </p>
        <span className="fw-bold">
        <i className="bi bi-headset">&#x20;</i>
        Круглосуточная поддержка клиентов
      </span>
        <p>
          Контакт-центр «Мега-Лайн» работает круглосуточно и наши специалисты всегда на связи! В любой момент вы можете
          обратиться за консультацией и каждый из более, чем 30 специалистов контакт-центра поможет Вам подключить
          дополнительную услугу или опцию, проконсультирует по тарифу, даст техническую консультацию и, при
          необходимости,
          отправит технических специалистов к вам домой.
        </p>
        <span className="fw-bold">
        <i className="bi bi-pci-card-network">&#x20;</i>
        Современные технологии сети
      </span>
        <p>
          Покрытие проводной оптической сети охватывает большинство многоквартирных домов, множество офисных зданий и
          частично дома «частного сектора» города Бишкек и пригородов. На данный момент общая протяженность оптической
          сети «Мега-Лайн» достигла более 400 км и расширяется ежедневно.
          <br/>В построении сети наши специалисты всегда стараются быть «на шаг впереди», а потому мы используем самое
          новое и современное оборудование ведущих мировых производителей ZyXel, Cisco и др.
        </p>

        <div className="text-center mb-5">
          <NavLink to="/form" className="btn btn-info fs-5 text-white">
            <i className="bi bi-check-lg text-white">&#x20;</i>
            Оформить заявку на подключение
          </NavLink>
        </div>
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1 as string} className="d-block w-100" alt="Слайд-1"/>
          </div>
          <div className="carousel-item">
            <img src={banner2 as string} className="d-block w-100" alt="Слайд-2"/>
          </div>
          <div className="carousel-item">
            <img src={banner3 as string} className="d-block w-100" alt="Слайд-3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <RatesBar/>
    </>
  );
};

export default Home;