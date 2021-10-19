import React, {useEffect} from "react";

function Profile ({menuState}){

    useEffect(() => {
    }, [menuState]);


    return(
        <h3 className={`${menuState === 0 ? '' : 'none'}`}>It`s profile!<p>In progress...</p></h3>
    );
}

export default Profile;