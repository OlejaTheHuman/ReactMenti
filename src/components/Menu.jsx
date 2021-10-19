import React, {useEffect} from "react";

function Menu({items, menuOptions}){
    const [activeItem, selectItem] = React.useState(null);
    const onSelectItem = (index) => {
        selectItem(index);
        setMenuState(index);
    };
    const[menuState, setMenuState] = menuOptions;

    useEffect(() => {
        if (menuState == null) onSelectItem(null)
    }, [menuState]);

    return(
        <nav className="menu">
            <p  onClick={() => onSelectItem(null)}
                className={activeItem === null ? 'clickedButton' : ''}>Главная</p>
            {items.map((name, index) => <p
            key={`${name}_${index}`}
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? 'clickedButton' : ''}
            >{name}</p>)}
        </nav>
    );
}

export default Menu;