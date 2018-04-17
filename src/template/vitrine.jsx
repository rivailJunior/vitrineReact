import React, { Component } from 'react';
import Carousel from '../components/carousel';
import Panel from '../components/panel';

export default class Vitrine extends Component{
  render() {
    return (
      <div>
        <Panel md={12}>
          <Carousel/>
        </Panel>
      </div>
    )
  }
}