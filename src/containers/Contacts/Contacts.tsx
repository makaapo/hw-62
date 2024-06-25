import React from 'react';

const Contacts = () => {
  return (
    <>
      <div>
        <h2 className="text-center mt-4 text-info">Контакты:</h2>
        <strong className="d-block mb-3">
          <i className="bi bi-headset">&#x20;</i>
          Контакт-Центр:
        </strong>
        <p>
          <i className="bi bi-telephone-fill">&#x20;</i>
          <a href="tel:+996312979888"
             className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">+996 312
            979
            888
          </a>
          ;
        </p>
        <p>
          <i className="bi bi-phone">&#x20;</i>
          <a href="tel:+996997979888"
             className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">+996 997
            979
            888 </a>
          — для абонентов «Megacom» звонок бесплатный.
        </p>
        <p>
          <i className="bi bi-phone">&#x20;</i>
          <a href="tel:+996779979888"
             className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">+996 779
            979 888 </a>
          — для абонентов «Beeline» звонок бесплатный.
        </p>
        <p>
          <i className="bi bi-phone">&#x20;</i>
          <a href="tel:+996701979888"
             className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">+996 701
            979 888 </a>
          — для абонентов «O!» звонок бесплатный.
        </p>
        <p>
          * при наличии бесплатных минут внутри сети
        </p>

        <p>
          Электронная почта:
          <i className="bi bi-envelope ms-2">&#x20;</i>
          <a href="mailto:akarimov@mega.kg"
             className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> akarimov@mega.kg</a>
        </p>
      </div>
      <hr/>
      <div>
        <h5>
          <i className="bi bi-building-fill-check">&#x20;</i>
          Офисы обслуживания клиентов компании расположены по адресам:
        </h5>
      </div>
      <div>
        <p>
          <i className="bi bi-geo-alt">&#x20;</i>
          г.Бишкек, ул.Жукеева - Пудовкина, 138.
        </p>
        <p>
          <i className="bi bi-clock">&#x20;</i>
          График работы: пн. — сб. с 9:00 до 18:00 (без перерыва) вс. — выходной. Касса работает с пн. - пт. с 9:00 до
          17:50.
        </p>
        <p>
          <i className="bi bi-geo-alt">&#x20;</i>
          г. Токмок, ул. Шамсинская, 49.
        </p>
        <p>
          <i className="bi bi-clock">&#x20;</i>
          График работы: пн. — пт. с 9:00 до 18:00 (перерыв с 12:00-13:00); сб., вс. — выходной.
        </p>
        <p>
          <i className="bi bi-geo-alt">&#x20;</i>
          г. Каракол, ул. Токтогула, 279.
        </p>
        <p>
          <i className="bi bi-clock">&#x20;</i>
          График работы: пн. — пт. с 9:00 до 18:00 (перерыв с 12:00-13:00); сб., вс. — выходной.
        </p>
        <p>
          <i className="bi bi-geo-alt">&#x20;</i>
          г. Чолпон Ата, ул. Советская, 19.
        </p>
        <p>
          <i className="bi bi-clock">&#x20;</i>
          График работы: пн. — пт. с 9:00 до 18:00 (перерыв с 12:00-13:00); сб., вс. — выходной.
        </p>
        <p>
          <i className="bi bi-geo-alt">&#x20;</i>
          г. Ош, ул. Ленина, 321.
        </p>
        <p>
          <i className="bi bi-clock">&#x20;</i>
          График работы: пн. — пт. с 9:00 до 18:00 (перерыв с 12:00-13:00); сб., вс. — выходной.
        </p>
      </div>
    </>
  );
};

export default Contacts;