import React, { Component } from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT } from 'styleConst';
import { mainBg2, mainBg2Thumb } from 'images';

const MainContentLayoutStyle = styled.div`
  height: 100vh;
  background: url(${props => props.bgImg}) center;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr ${FOOTER_HEIGHT}px;
`;

export class MainContentLayout extends Component {
  constructor(props) {
    super(props);
    const bgImg = new Image();
    bgImg.src = mainBg2;
    
    this.state = {
      imgLoaded: false,
      bgImg,
      loadedImgSrc: mainBg2Thumb
    };
    bgImg.onload = () => {
      this.setState({ loadedImgSrc: this.state.bgImg.src })
    };
  }
  render() {
    return (
      <MainContentLayoutStyle bgImg={this.state.loadedImgSrc}>
        {this.props.children}
      </MainContentLayoutStyle>
    )
  }
}