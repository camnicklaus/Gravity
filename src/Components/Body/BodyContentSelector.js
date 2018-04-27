import React from 'react';
import styled from 'styled-components';

//components
import { OptionsMain, AboutMain, TechnologyMain } from 'Components/Body';

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
    let CurrentComponent = AboutMain;
    switch (route) {
        case 'about':
        CurrentComponent = AboutMain;
        break;
        case 'options':
        CurrentComponent = OptionsMain;
        break;
        case 'technology':
        CurrentComponent = TechnologyMain;
        break;
        default:
        CurrentComponent = AboutMain;
    };
    return (
        <BodyContentSelectorStyle>
            <CurrentComponent />
        </BodyContentSelectorStyle>
    );
};