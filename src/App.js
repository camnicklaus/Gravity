import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Media from "react-media";
import Img from 'react-image';

import {  BodyContentRouter } from 'Components/Body';
import { MainContentLayout } from 'Components/Layout/MainContentLayout';
import { HeaderContentLayout, HeaderContentWrap } from 'Components/Header';
import { DESKTOP, TABLET, BLACK } from 'styleConst';

const HeaderContentTop = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const HeaderContentBottom = styled.div`
  position: relative;
  height:40px;
  /* flex: 1; */
  display: flex;
  justify-content: center;
  @media (max-width: ${TABLET + 'px'}) {
    justify-content: flex-end;
  }
`;
const NavDesktop = styled.ul`
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  /* border: 1px solid pink; */
  display: flex;
`;
const NavMobileStyle = styled.ul`
  height: 300px;
  background: ${BLACK({opacity:0.9})};
  position: absolute;
  padding: 0;
  margin: 0;
  list-style: none;
  /* bottom: 0; */
  color: black;
  border: 1px solid pink;
  /* display: flex; */
`;
class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  render() {
    return (
      this.state.menuOpen ? (
        <NavMobileStyle onClick={() => this.setState({menuOpen: false})}>
          {this.props.children}
        </NavMobileStyle>
      ) : (
        <div onClick={() => this.setState({menuOpen: true})}>hamburger</div>
      )
    );
  }
}
const NavLi = styled.li`
  /* height: 100%; */
  display: flex;
  align-items: center;
  &::after {
    content: '|';
  }
  &:last-of-type {
    &::after {
      content: '';
    }
  }
`;
const NLink = styled(NavLink)`
    text-decoration: none;
    font-size: small;
    white-space: nowrap;
    padding: 20px 10px;
    color: ${props => props.isnav ? 'white' : 'white'};
    &.active {
        color: blueviolet;
    }
`;
NLink.defaultProps = {
    activeClassName: 'active',
}

const Main = styled.main`
  height: 100%;
`;
const Footer = styled.footer`

`;

class App extends Component {
  render() {
    return (
      <MainContentLayout>
        <HeaderContentLayout>
          <HeaderContentWrap>
            <HeaderContentTop>
              <h2>GRAVITY</h2>
            </HeaderContentTop>
            <HeaderContentBottom>
            <Media query={`(max-width: ${TABLET}px)`}>
              {matches =>
                matches ? (
                  <NavMobile>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/protect'>Gravity Protect</NLink></NavLi>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/value-data'>Gravity Value Data</NLink></NavLi>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/connect'>Gravity Connect</NLink></NavLi>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/cloud-exchange'>Gravity Cloud Exchange</NLink></NavLi>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/private-storage'>Gravity Private Storage</NLink></NavLi>
                    <NavLi><NLink isnav={matches ? 1 : 0} to='/survive'>O365 Survive</NLink></NavLi>
                  </NavMobile>
                ) : (
                  <NavDesktop>
                    <NavLi><NLink to='/protect'>Gravity Protect</NLink></NavLi>
                    <NavLi><NLink to='/value-data'>Gravity Value Data</NLink></NavLi>
                    <NavLi><NLink to='/connect'>Gravity Connect</NLink></NavLi>
                    <NavLi><NLink to='/cloud-exchange'>Gravity Cloud Exchange</NLink></NavLi>
                    <NavLi><NLink to='/private-storage'>Gravity Private Storage</NLink></NavLi>
                    <NavLi><NLink to='/survive'>O365 Survive</NLink></NavLi>
                  </NavDesktop>
                )
              }
            </Media>
              
            </HeaderContentBottom>
          </HeaderContentWrap>
        </HeaderContentLayout>
        <Main>
          <BCTransitionerWithRouter />
        </Main>
        <Footer>
        </Footer>
      </MainContentLayout>
    );
  }
}

const BodyContentTransitioner = (props) => {
    const { match, location } = props;
    const defaultStyle = {
        transition: `all 400ms linear`,
        opacity: 0,
        height: '100%'
    }
    const transStyle = {
        entering: {
            position: "absolute",
            opacity: 0,
        },
        entered: {
            opacity: 1,
        },
        exiting: {
            opacity: 0,
        }
    }
    return (
        <TransitionGroup
          style={{height: '100%'}}
        >
            <Transition key={location.pathname} timeout={400} mountOnEnter={false} unmountOnExit={true}>
                {(status) => { 
                  // console.log('status', status, 'location: ', location)
                  return (
                    <div style={{
                        ...defaultStyle,
                        ...transStyle[status]
                    }}>
                        <Switch location={location}>
                            {/* {match.isExact && <Redirect to={`${match.url}/about`} />} */}
                            <Route path={`/:route`} component={BodyContentRouter} />
                            <Route exact path={`/`} component={BodyContentRouter} />
                            {/* <Route exact path='/' render={() => <Redirect to={'/protect'} />} /> */}
                            
                        </Switch>
                    </div>
                )}}
            </Transition>
        </TransitionGroup>
    )
}
const BCTransitionerWithRouter = withRouter(BodyContentTransitioner);

export default App;
