import React from "react";

function Menu({items}){
    const [activeItem, selectItem] = React.useState(null);
    const onSelectItem = (index) => {
        selectItem(index);
    };

    return(
        <nav className="menu">
            <p  onClick={() => onSelectItem(null)}
                className={activeItem === null ? 'clickedButton' : ''}>Home</p>
            {items.map((name, index) => <p
            key={`${name}_${index}`}
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? 'clickedButton' : ''}
            >{name}</p>)}
        </nav>
    );
}

export default Menu;