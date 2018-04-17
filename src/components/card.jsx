import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import '../../scss/carousel.scss';

export default class Card extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(url) {
    window.open(url, '_blank');
  }

  render() {
    const {imageName, name, price, oldPrice, detailUrl} = this.props.options;
    const payment = this.props.options.productInfo.paymentConditions;
    const className = this.props.className ?  this.props.className : 'product';
    return(
      <div data-slide="1" className={className} onClick={() => this.onClick(detailUrl)}>
        <Row>
          <Col md={12}>
            <Image rounded src={imageName} alt=""/>
          </Col>
          <Col md={12} className="m-t-10">
            <Col md={12} className="text12">{name}</Col>
          </Col>
          <Col md={12} className="m-t-10">
            <Col md={12} className="text-danger"> <small >  De: </small> <strong> {oldPrice} </strong></Col>
            <Col md={12} className="text-danger"> <small> Por:</small> <strong> {price} </strong></Col>
            <Col md={12} className="text-danger" dangerouslySetInnerHTML={{__html: payment}}/>
          </Col>
        </Row>
      </div>
    );
  };
}

