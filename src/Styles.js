import styled from 'styled-components';

const colors = {
    background: "#f4f1de",
    second: "#3d405b",
    opacity: 'rgba(0,0,0,0.1)'
}

export const ContainerHome = styled.div`
    text-align: center;
`
export const H1Home = styled.h1`
    
    font-size: 40px;

`

export const Navigation = styled.button`
    background-color: ${colors.second};
    color: white;
    font-size: 20px;
    font-weight: bolder;
    border: none;
    border-radius: 10px;
    padding: 10px 50px;
    margin: 35px 30px;
    transition: 0.3s;
    -webkit-box-shadow: 0px 0px 31px -15px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 31px -15px rgba(0,0,0,1);
    box-shadow: 0px 0px 31px -15px rgba(0,0,0,1);
    &:hover {
        cursor: pointer;
        background-color: #f06073;
        -webkit-box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
        -moz-box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
        box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
    }
`

export const TitleNavigation = styled.h1`
    font-size: 30px;
`

export const ContainerNavigation = styled.div`
    background-color: ${colors.opacity};
    justify-content: space-evenly;
    display: flex;
    align-items: center;
`

export const ContainerForm = styled.form`
    border-radius: 10px;
    background-color: ${colors.opacity};
    display: flex;
    justify-content: center;
    margin: 0px auto;
    width: 400px;
    padding-bottom: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-shadow: 0px 0px 31px -1px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 31px -1px rgba(0,0,0,1);
    box-shadow: 0px 0px 31px -1px rgba(0,0,0,1);
`

export const InputForm = styled.input`
    color: black;
    background-color: ${colors.background};
    border: none;
    border-bottom: 4px solid ${colors.second};
    border-radius: 5px;
    margin: 30px 20px;
    padding: 20px 50px;
    transition: 0.4s;

    &:hover {
        -webkit-box-shadow: 0px 0px 14px -1px rgba(0,0,0,1);
        -moz-box-shadow: 0px 0px 14px -1px rgba(0,0,0,1);
        box-shadow: 0px 0px 14px -1px rgba(0,0,0,1);
    }
`

export const H1Form = styled.h1`
    font-size: 40px;
    background-color: ${colors.second};
    color: white;
    padding: 10px;
    width: 380px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 10px;
    text-align: center;
`

export const ButtonForm = styled.button`
    padding: 20px 50px;
    background-color: #f06073;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    transition: 0.4s;

    &:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
        -moz-box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
        box-shadow: 0px 0px 26px 0px rgba(239,35,60,0.82);
    }
`

