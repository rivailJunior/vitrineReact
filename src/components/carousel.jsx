import React, {Component} from 'react';
import '../../scss/carousel.scss';
import Card from '../components/card';
import ProductJsonData from '../module/dataProducts';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.leftIcon =  require('../../public/img/iconLeft.png');
    this.rightIcon = require('../../public/img/iconright.png');

    this.state = {
      proReference: ProductJsonData[0].data.reference,
      productList: ProductJsonData[0].data.recommendation,
    }

    this.populateProductList = this.populateProductList.bind(this);
  }

  componentDidMount() {
    this.doCarouselAction();
  }

  doCarouselAction() {
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

  populateProductList() {
    const newArr = this.state.productList.slice(0, 3);
    const arrAux = this.state.productList.concat(newArr)
    this.setState({ productList: arrAux }, () => {
      this.doCarouselAction();
    })
  }

  render () {
    return (
      <div className="carousel js-product-carousel">
        <Card options={this.state.proReference.item} className="fixed"/>
        <div className="carousel__view">
          <span className="carousel__control js-carousel-prev"><i className="icon"><img src={this.leftIcon} alt=""/></i></span>
          <span href="#" className="carousel__control js-carousel-next"><i className="icon"><img src={this.rightIcon} alt=""/></i></span>
          <div className="pagination-el" onClick={this.populateProductList}>
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