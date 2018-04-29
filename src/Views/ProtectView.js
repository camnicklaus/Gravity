import React, { Component } from 'react';
import styled from 'styled-components';
import { ExampleForm } from 'Components/Forms/ExampleForm';
import { BodyContentWrapStyle } from 'Components/Body/BodyContentWrapStyle';

const ProtectViewStyle = BodyContentWrapStyle.extend`
    flex-direction: column;
`;

export const ProtectView = () => (
    <ProtectViewStyle>
        <h2>Gravity</h2>
        <p>protect your data!</p>
        <ExampleForm />
    </ProtectViewStyle>
)
