import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding: 20px;
  height: 300px;
  overflow-y: auto;
  width: 400px;
  border: 1px solid;
  border-radius: 5px;
  background-color: #cec1df2e;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #cec1df2e;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e99797;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #cec1df2e;
  }
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 10px;
`;

export const ContactsText = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
`;
