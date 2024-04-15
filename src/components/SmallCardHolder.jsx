import React from "react";
import SmallCard from "./SmallCard";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SmallCardHolder({ cardData, bsLgDivision, bsSmDivision }) {

    //Se não forem passados valores, Definir os seguintes como as widths do bootstrap
    const lgDivision = bsLgDivision === undefined ? 6 : bsLgDivision;
    const smDivision = bsSmDivision === undefined ? 12 : bsSmDivision;

    return (
        <div className="SmallCardHolder">
            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} xs lg={lgDivision} sm={smDivision}>
                        <SmallCard
                            titleText={card.titleText}
                            mainText={card.mainText}
                            percentage={card.percentage}
                            icon={card.icon}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default SmallCardHolder;