import styled from 'styled-components';

export const Buttonletters = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#57419D" : "white"};
  color: ${props => props.primary ? "white" : "#57419D"};

    
    font-size: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    padding: 0.25em 1em;
    background-color: #57419D;
    border: 3px solid #A89DD1;
    border-radius: 26px;
`;