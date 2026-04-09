import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex; 
    background: #F5F5F4;
    border-radius: 50px;
    padding: 6px 6px 6px 18px; gap: 8px; 
    align-items: center; 
    max-width: 460px;

`

export const SearchInput = styled.input`
    flex: 1; 
    border: none; 
    background: transparent; 
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    outline: none; 
    color: #1C1917;

    ::placeholder {
        color: #A8A29E
    }

`

export const SearchButton = styled.button`
    background: #C2410C; 
    color: #fff; 
    border: none;
    padding: 9px 22px; 
    border-radius: 50px; 
    font-size: 13px; 
    font-weight: 500;
    cursor: pointer; 
    font-family: 'DM Sans', sans-serif; 
    transition: background .2s;

    &:hover {
        background: #7C2D12; 
    }

`