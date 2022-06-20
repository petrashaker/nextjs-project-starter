import styled from 'styled-components';

export const PageWrap = styled.li`
    display: inline-block;
    margin: 10px 5px;   
`;

export const Link = styled.a`
    text-decoration: none;
    color: #0052A2;
    font-size: 10px;
    border: 1px solid #0052A2;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: #000B18;
        border: #000B18;
        color: white;
    }
`;