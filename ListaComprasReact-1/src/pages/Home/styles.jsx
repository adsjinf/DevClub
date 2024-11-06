import styled from 'styled-components'

export const Container = styled.div `
    background-color: #b752ff;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    width: 40vw;
    h1 {
        color: #fff;
        text-align: center;
      }
    
    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;
        margin-right: 10px;
        outline: none;
        padding-left: 10px;
        width: 80%;
        font-size: 15px;
    }
`

export const AddButton = styled.button `
    background: #2991ce;
    color: #000;
    height: 35px;
    width: 120px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        color: #fff;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;
    max-width: 100%;

    p {
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        max-width: 95%;
        text-overflow: ellipsis
    }
    &:hover {
        background: #54c7fc;
    }
`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`