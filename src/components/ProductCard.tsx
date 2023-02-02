import React from "react";
import { Col } from "react-bootstrap";

export interface ICard {
  title: string;
  imgUrl: any;
}

export const ProductCard = ({ title, imgUrl }: ICard) => {
  return (
    <Col sm={6} md={3}>
      <div className="prod-imgbx">
        <img src={imgUrl} />
        <div className="prod-txt">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  );
};
