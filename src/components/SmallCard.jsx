import React from 'react';
import '../styles/components-styles/SmallCard.css';

function SmallCard(props) {

    const percentageValue = parseInt(props.percentage);
    //Definir a classe de acordo com o valor de percentage passado
    const percentageClass = percentageValue > 0 ? 'textGreen' : 'textRed';

    return (
        <div className='SmallCard'>
            <div className="leftData"> 
                <div className="titleText">{props.titleText}</div>
                <div className="mainText">
                    {props.mainText}
                    <div className={`mainTextPercentage ${percentageClass}`}>
                        {props.percentage}
                    </div>
                </div>
            </div>
            <div className="rightData">
                <div className="coloredBox">
                    <div className="iconHolder">
                        {props.icon}
                    </div>
                </div>                   
            </div>
        </div>
    );
}

export default SmallCard;
