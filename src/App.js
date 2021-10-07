import React from "react";

import './styles/index.css';
import Menu from './components/Menu'
import Registration from "./components/Registration";
import Home from "./components/Home";

import cat from './images/cat.svg';
import inst from './images/inst.svg';
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
                      <Home buttonPressFunc={pressButton} buttonState={buttonState}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
