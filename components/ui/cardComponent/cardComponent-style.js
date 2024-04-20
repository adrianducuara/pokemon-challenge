import { css } from "lit";

export const cardComponentStyle = css`
    article {
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 350px;
        max-height: 300px;
        transition: transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1) 0s, -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1) 0s;
    }

    img {
        width: 100px;
    }

    .container-name {
        background-color: #FCC72C;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        height: 10%;
        text-align: center;
        width: 100%;
    }
`;