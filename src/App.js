import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Media from "react-media";
import Img from 'react-image';

import { OptionsMain, AboutMain, TechnologyMain, BodyContentSelector } from 'Components/Body';
import { MainContentLayout } from 'Components/Layout/MainContentLayout';
import { HeaderContentLayout, HeaderContentWrap } from 'Components/Header';
import { DESKTOP, TABLET } from 'styleConst';

const HeaderContentLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HeaderContentRight = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
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
  /* height: 100%; */
  background: white;
  position: absolute;
  padding: 0;
  margin: 0;
  list-style: none;
  bottom: 0;
  color: black;
  /* border: 1px solid pink; */
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
      <React.Fragment>
        {this.state.menuOpen ? (
          <NavMobileStyle onClick={() => this.setState({menuOpen: false})}>
            {this.props.children}
          </NavMobileStyle>
          ) :
        (
          <div onClick={() => this.setState({menuOpen: true})}>hamburger</div>
        )}
      </React.Fragment>
    )
  }
}
const NavLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const NLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.isNav ? 'black' : 'white'};
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
            <HeaderContentLeft>
              <h2>GRAVITY</h2>
            </HeaderContentLeft>
            <HeaderContentRight>
            <Media query={`(max-width: ${TABLET}px)`}>
              {matches =>
                matches ? (
                  <NavMobile>
                    <NavLi><NLink isNav={matches} to='/about'>about</NLink></NavLi>
                    <NavLi><NLink isNav={matches} to='/options'>options</NLink></NavLi>
                    <NavLi><NLink isNav={matches} to='/technology'>how it works</NLink></NavLi>
                  </NavMobile>
                ) : (
                  <NavDesktop>
                    <NavLi><NLink to='/about'>about</NLink></NavLi>
                    <NavLi><NLink to='/options'>options</NLink></NavLi>
                    <NavLi><NLink to='/technology'>how it works</NLink></NavLi>
                  </NavDesktop>
                )
              }
            </Media>
              
            </HeaderContentRight>
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
                            <Route path={`/:route`} component={BodyContentSelector} />
                            
                        </Switch>
                    </div>
                )}}
            </Transition>
        </TransitionGroup>
    )
}
const BCTransitionerWithRouter = withRouter(BodyContentTransitioner);

export default App;
