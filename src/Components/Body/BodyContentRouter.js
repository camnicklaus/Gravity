import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

//components

import { ProtectView, ValueDataView, ConnectView, PrivateStorageView, SurviveView, CloudExchangeView } from 'Views';

//styles
import { DESKTOP } from 'styleConst';

const BodyContentRouterStyle = styled.div`
    max-width: ${DESKTOP + 'px'};
    margin: auto;
    height: 100%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BodyContentRouter = () => (
    <BodyContentRouterStyle>
        <Switch>
            <Route path='/protect' component={ProtectView} />
            <Route path='/value-data' component={ValueDataView} />
            <Route path='/connect' component={ConnectView} />
            <Route path='/cloud-exchange' component={CloudExchangeView} />
            <Route path='/private-storage' component={PrivateStorageView} />
            <Route path='/survive' component={SurviveView} />
            <Route exact path='/' component={ProtectView} />
        </Switch>
    </BodyContentRouterStyle>
);

