import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './assets/images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
      </div>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite casas de acolhimento e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Teresina</strong>
        <span>Piauí</span>
      </div>

      <a href="" className="enter-app"
        >

      </a>
    </div>
  );
}

export default App;
