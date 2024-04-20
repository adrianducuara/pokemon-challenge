import {css} from 'lit';
export const headerComponentStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    .header-container {
        background-color: #A0153E;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }
    .boder-effect {
        box-shadow: 0 2px 9px 0 rgba(105, 5, 35, 1); 
    }

    .title {
        font-family: "Luckiest Guy", cursive;
        font-weight: 400;
        font-style: normal;
        color: #fff;
        font-size: 2.8rem
    }
`; 