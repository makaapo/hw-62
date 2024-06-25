import React, {FormEvent} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const Form = () => {

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <form className="row g-3 needs-validation mt-5" onSubmit={onFormSubmit}>
        <div className="col-md-4 position-relative">
          <label className="form-label">Имя</label>
          <input type="text" className="form-control" value="Василий" required/>
        </div>
        <div className="col-md-4 position-relative">
          <label className="form-label">Фамилия</label>
          <input type="text" className="form-control" value="Пупкин" required/>
        </div>
        <div className="col-md-4 position-relative">
          <label className="form-label">Почта</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@mail</span>
            <input type="text" className="form-control" required/>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <label className="form-label">Точный адрес</label>
          <input type="text" className="form-control" required/>
        </div>
        <div className="col-md-3 position-relative">
          <label className="form-label">Тариф</label>
          <select className="form-select" required>
            <option selected disabled value="">Выберите тариф...</option>
            <option>MegaHit</option>
            <option>MegaPro</option>
            <option>MegaULTRA</option>
          </select>
        </div>
        <div className="col-md-3 position-relative">
          <label className="form-label">Телефон</label>
          <input type="tel" className="form-control" required/>
        </div>
        <div className="col-12">
          <NavLink to="continue" className="btn btn-info text-white" type="submit">Оформить заявку</NavLink>
        </div>
      </form>
      <Outlet/>
    </>
  );
};

export default Form;