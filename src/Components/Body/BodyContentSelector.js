import React from 'react';
import styled from 'styled-components';

//components
import { ProtectView, ValueDataView, ConnectView, CloudExchangeView, PrivateStorageView, SurviveView } from 'Components/Body';

//styles
import { DESKTOP } from 'styleConst';

const BodyContentSelectorStyle = styled.div`
    max-width: ${DESKTOP + 'px'};
    margin: auto;
    height: 100%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BodyContentSelector = ({match}) => {
    const { route } = match.params;
    let CurrentComponent = ProtectView;
    switch (route) {
        case 'protect':
        CurrentComponent = ProtectView;
        break;
        case 'value-data':
        CurrentComponent = ValueDataView;
        break;
        case 'connect':
        CurrentComponent = ConnectView;
        break;
        case 'cloud-exchange':
        CurrentComponent = CloudExchangeView;
        break;
        case 'private-storage':
        CurrentComponent = PrivateStorageView;
        break;
        case 'survive':
        CurrentComponent = SurviveView;
        break;
        default:
        CurrentComponent = ProtectView;
    };
    return (
        <BodyContentSelectorStyle>
            <CurrentComponent />
        </BodyContentSelectorStyle>
    );
};
