import styled from 'styled-components';
import { BLACK, OFF_BLACK } from 'styleConst';

export const BodyContentWrapStyle = styled.section`
    background: ${BLACK({opacity:0.9})};
    
    /* height: 50vh; */
    /* min-height: 300px; */
    border-radius: 10px;
    border: 1px solid blue;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* opacity: 0.9; */
`;