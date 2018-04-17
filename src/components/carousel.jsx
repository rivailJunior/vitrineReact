import React, {Component} from 'react';
// import {Col, Row, Image} from 'react-bootstrap';
import '../../scss/carousel.scss';
import Card from '../components/card';
import ProductJsonData from '../module/dataProducts';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.leftIcon =  require('../../public/img/iconLeft.png');
    this.rightIcon = require('../../public/img/iconright.png');
    this.options1 = {
      img: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6665633",
      description: 'Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo',
      name: 'Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7',
      price:"R$ 499,00",
      oldPrice:"R$ 599,00",
      payment: "ou <strong>12X</strong> de <strong> 41.58</strong>",
      className:"fixed"
    };
    this.options2 = {
      img: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6665633",
      description: 'Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo',
      name: 'Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7',
      price:"R$ 499,00",
      oldPrice:"R$ 599,00",
      payment: "ou <strong>12X</strong> de <strong> 41.58</strong>",
      className:"product"
    };
    this.state = {
      proReference: ProductJsonData[0].data.reference,
      productList: ProductJsonData[0].data.recommendation,
    }

  }

  componentDidMount() {
    let carousels = document.querySelectorAll('.js-product-carousel');
    [].forEach.call(carousels, (carousel) => {
      this.carouselize(carousel);
    });
  }


  /**
   * carouselize - main function to apply animation to carousel item component
   * @param carousel
   */
  carouselize(carousel) {
    let productList = carousel.querySelector('.js-product-list');
    let productListWidth = 0;
    let productListSteps = 0;
    let products = carousel.querySelectorAll('.product');
    let productAmount = 0;
    let productAmountVisible = 4;
    let carouselPrev = carousel.querySelector('.js-carousel-prev');
    let carouselNext = carousel.querySelector('.js-carousel-next');

    //Count all the products
    [].forEach.call(products, (product) => {
      productAmount++;
      productListWidth += 250;
      productList.style.width = productListWidth+"px";
    });

    carouselNext.onclick = () => {
      if(productListSteps < productAmount-productAmountVisible) {
        productListSteps++;
        moveProductList();
      }
    }

    carouselPrev.onclick = () => {
      if(productListSteps > 0) {
        productListSteps--;
        moveProductList();
      }
    }

    // This is a bit hacky, let me know if you find a better way to do this!
    // Move the carousels product-list
    function moveProductList() {
      productList.style.transform = "translateX(-"+205*productListSteps+"px)";
    }
  }

  /**
   * onFocus - will set the current img bgc when its container is on focus
   * @param item
   */
  onFocus(item) {
    console.log('on Focus', item.target);
    const img = item.target;
  }

  render () {
    return (
      <div className="carousel js-product-carousel">
        <Card options={this.state.proReference.item} className="fixed"/>
        <div className="carousel__view">
          <span className="carousel__control js-carousel-prev"><i className="icon"><img src={this.leftIcon} alt=""/></i></span>
          <span href="#" className="carousel__control js-carousel-next"><i className="icon"><img src={this.rightIcon} alt=""/></i></span>
          <div className="pagination-el">
            pagination
          </div>
          <ul className="product-list js-product-list">
            {this.state.productList.map((item, key) => {
              return(
                <li className="product-list__item" key={key} >
                  <Card options={item} className="product"/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
};