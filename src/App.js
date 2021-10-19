import './styles/project/index.scss';

import Menu from './components/Menu';
import Registration from "./components/Registration";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";

import React from "react";

import cat from './images/cat.svg';
import profile from "./images/profile.svg";


function App() {
    const registrationButton = React.useState(false);
    const [buttonState, setButtonState] = registrationButton;
    const pressButton = (state) => {
        setButtonState(!state);
    };

    const menuOptions = React.useState(null);
    const [menuState, setMenuState] = menuOptions;


  return (
      <div className="container">
          <Registration registrationButton={registrationButton} />
          <div className='page'>
              <div className="wrapper">
                  <header className="header">
                      <div onClick={() => setMenuState(null)} className="logo">
                          <img src={cat} alt="logo"/>
                          <p className="header__menti">
                              menti
                          </p>
                      </div>
                      <img onClick={() => pressButton(buttonState)} src={profile} alt="profile"/>
                  </header>

                  <div className="body">
                      <Menu menuOptions={menuOptions} items={['Профиль', 'Контакты']}/>
                      <Home menuState={menuState} registrationButton={[buttonState, pressButton]}/>
                      <Profile menuState={menuState}/>
                      <Contacts menuState={menuState}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
