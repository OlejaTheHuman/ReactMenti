import './styles/index.css';
import Menu from './components/Menu'
import Registration from "./components/Registration";
import React from "react";

import cat from './images/cat.svg';
import inst from './images/inst.svg';
import menti from './images/menti.svg';
import profile from './images/profile.svg';
import scroll from './images/scroll.svg';
import telegram from './images/telegram.svg';

function App() {
    const [buttonState, setButtonState] = React.useState(false);

    const pressButton = (state) => {
        setButtonState(!state);
    };

  return (
      <div className="container">
          <Registration state={buttonState}/>
          <div className='page'>
              <div className="links">
                  <img src={telegram} alt="telegram"/>
                  <img src={inst} alt="instagram"/>
              </div>
              <img className="scroll" src={scroll} alt="scroll down"/>
              <div className="wrapper">
                  <header className="header">
                      <div className="logo">
                          <img src={cat} alt="logo"/>
                          <p className="header__menti">
                              menti
                          </p>
                      </div>
                      <img onClick={() => pressButton(buttonState)} src={profile} alt="profile"/>
                  </header>

                  <div className="body">
                      <Menu items={['Profile', 'About', 'Contacts']}/>
                      <div className="content">
                          <img src={menti} alt="cat" className="content__img"/>
                          <div className="content__about">
                              <p className="about__header">
                                  Зачем нужен <br/><span>menti</span>?
                              </p>
                              <p className="about__text">
                                  На менти ты сможешь следить за своими резльтатами во время подготовки к ЕГЭ,
                                  прокачивать свои навыки решения пробников и получать индивидуальные советы!
                              </p>
                              <div onClick={() => pressButton(buttonState)} className="about__button">
                                  Начать вместе!
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
