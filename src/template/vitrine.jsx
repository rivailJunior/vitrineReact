import React, { Component } from 'react';
import Carousel from '../components/carousel';
import Panel from '../components/panel';
export default class Vitrine extends Component{
  render() {
    return (
      <div>
        <Panel>
          <Carousel/>
        </Panel>
      </div>
    )
  }
}