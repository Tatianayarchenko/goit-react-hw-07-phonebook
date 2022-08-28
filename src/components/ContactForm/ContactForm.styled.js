import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  background-color: #cec1df2e;
  border: 1px solid;
  border-radius: 5px;
  width: 400px;
  padding: 20px;
`;

export const InputForm = styled(Field)`
  display: block;
  margin: 10px auto;
  width: 300px;
  height: 20px;
  border: 1px solid;
  border-radius: 5px;
  padding: 3px;
  background-color: #cec1df2e;
  color: #e99797;
`;
