import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import Contacts from './containers/Contacts/Contacts';
import React from 'react';
import Footer from './components/Footer/Footer';
import AboutUs from './containers/AboutUs/AboutUs';
import Form from './components/Form/Form';

const App = () => (
  <>
    <header>
      <Toolbar/>
    </header>
    <div className="container-fluid d-flex flex-column min-vh-100">
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/form" element={<Form/>}>
            <Route path="continue" element={<h3 className="text-center fs-1 text-success">Заявка
              оформлена. <br/> Вернитесь на главную страницу! <br/>
              <a href="/" className="fs-5">Главная</a></h3>}/>
          </Route>
          <Route path="*" element={<h1 className="text-center">По вашему запросу ничего не найдено</h1>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  </>
);

export default App
