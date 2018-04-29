import React from 'react';
import styled from 'styled-components';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';

const FormStyle = styled.form`
    background-color: brown;
`;

// const firstName = val => {
//     console.log('firstName val: ', val);
// }
const firstNameChange = (val, val2) => {
    console.log(val, val2);
}

export const ExampleForm = () => (
    <Form render={({
      submitForm
    }) => (
      <FormStyle onSubmit={submitForm}>
        <Text field="firstName" placeholder='First Name' onChange={firstNameChange} />
        <Text field="lastName" placeholder='Last Name' />
        <RadioGroup field="gender">
          <Radio value="male" />
          <Radio value="female" />
        </RadioGroup>
        <TextArea field="bio" />
        <Checkbox field="agreesToTerms" />
        <button type="submit">Submit</button>
      </FormStyle>
    )} />
  )