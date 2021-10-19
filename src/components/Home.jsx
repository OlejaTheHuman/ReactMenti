import React, {useEffect} from "react";
import menti from "../images/menti.svg";

function Home({registrationButton, menuState}) {
    const [buttonState, setButtonState] = registrationButton;

    useEffect(() => {
    }, [menuState]);


    return(
        <div className={`content ${menuState == null ? '' : 'none'}` }>
            <img src={menti} alt="cat" className="content__img"/>
            <div className="content__about">
                <p className="about__header">
                    Зачем нужен <br/><span>menti</span>?
                </p>
                <p className="about__text">
                    На менти ты сможешь следить за своими резльтатами во время подготовки к ЕГЭ,
                    прокачивать свои навыки решения пробников и получать индивидуальные советы!
                </p>
                <div onClick={() => setButtonState(buttonState)} className="about__button">
                    Начать вместе!
                </div>
            </div>
        </div>
    );
}

export default Home;