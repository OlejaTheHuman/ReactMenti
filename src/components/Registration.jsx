import React, {useEffect} from "react";
import '../styles/registration.css';

function Registration({registrationButton}){

    const regRef = React.useRef();
    const [buttonState, setButtonState] = registrationButton;


    useEffect(() => {
        setButtonState(buttonState);
    }, [buttonState]);

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const handleOutsideClick = (e) => {
        if(!e.path.includes(regRef.current)) {
            setButtonState(false);
        }
    }

    return(
        <div className={`registration ${buttonState === true ? '' : 'none'}`}>
            <div ref={regRef} className="registration__block">
                <p className="registration__text">
                    Регистрация
                </p>
                <div className="registration__fields">
                    <div className="registration__username">
                        <span>Псевдоним</span>
                        <hr/>
                    </div>
                    <div className="registration__email">
                        <span>Email</span>
                        <hr/>
                    </div>
                    <div className="registration__password">
                        <span>Пароль</span>
                        <hr/>
                    </div>
                </div>
                <div onClick={() => setButtonState(false)} className="registration__button">
                    <p>Отправить!</p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
