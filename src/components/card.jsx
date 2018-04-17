import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import '../../scss/carousel.scss';

export default class Card extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const {imageName, name, description, price, oldPrice, detailUrl} = this.props.options;
    const payment = this.props.options.productInfo.paymentConditions;
    const className = this.props.className ?  this.props.className : 'product';
    return(
      <div data-slide="1" className={className} >
        <Row>
          <Col md={12}>
            <Image rounded src={imageName} alt=""/>
          </Col>
          <Col md={12} className="m-t-10">
            <Col md={12} className="text12">{name}</Col>
            <Col md={12} className="text12">{description}</Col>
          </Col>
          <Col md={12} className="m-t-10">
            <Col md={12}>{price}</Col>
            <Col md={12}>{oldPrice}</Col>
            <Col md={12}>{payment}</Col>
          </Col>
        </Row>
      </div>
    );
  };
}

