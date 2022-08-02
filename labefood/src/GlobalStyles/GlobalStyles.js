import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    #root,html,body{
        min-width:100vw;
        min-height:100vh;
        display:flex;
        justify-content:center;
        font-family: 'Roboto', sans-serif;
    }
`;