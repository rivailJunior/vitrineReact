import React, {Component} from 'react';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itens = [1,2,3,4,5,6,7,8];
    const img = require('../../public/produto.jpg');
    const leftIcon = require('../../public/img/iconLeft.png');
    const rightIcon = require('../../public/img/iconright.png');
    return(
      <div className="container">
        <div className="header">
            <div id="header1" className="col-md-5">Voce Visitou</div>
            <div id="header2" className="col-md-7">Gostaria de ver tambem:</div>
        </div>
        <div className="slider">
          <div className="slider-item fixed" >
            <img src={img} alt=""/>
            <div className="description">
                  <span className="text">
                    Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7\
                    <br/>
                    Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo
                  </span>
              <p>
                <span className="price1">de R$: 100, 00</span>
                <br/>
                <span className="price2">por R$: 20, 00</span>
                <br/>
                <span className="price3">ou 10x de 100</span>
              </p>
            </div>
          </div>
          {itens.map((item, key) => {
            return(
              <div className="slider-item" key={key}>
                <img src={img} alt=""/>
                <div className="description">
                  <span className="text">
                    Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7\
                    <br/>
                    Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo
                  </span>
                  <p>
                    <span className="price1">de R$: 100, 00</span>
                    <br/>
                    <span className="price2">por R$: 20, 00</span>
                    <br/>
                    <span className="price3">ou 10x de 100</span>
                  </p>
                </div>
              </div>
            )
          })}
          <div id="btLeft" className="buttonsSlider">
            <img src={leftIcon} alt=""/>
          </div>
          <div id="btRigth" className="buttonsSlider">
            <img src={rightIcon} alt=""/>
          </div>
          <div className="slide-pagination">
            Pagination
          </div>
        </div>
      </div>
    );
  }
}