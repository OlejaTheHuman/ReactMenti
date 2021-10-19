import React, {useEffect} from "react";

function Contacts ({menuState}){

    useEffect(() => {
    }, [menuState]);


    return(
        <h3 className={`${menuState === 1 ? '' : 'none'}`}>It`s contacts!<p>In progress...</p></h3>
    );
}

export default Contacts;