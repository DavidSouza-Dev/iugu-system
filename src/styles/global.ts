import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --highlight: #F5850B;
        --background: white;
        --black: #000;

        --container: 100rem;

        --small: 1.5rem;
        --medium: 3rem;
        --large: 5rem;
    }
    * {
        font-family: DM Sans, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
     html, body, #__next {
        height: 100%;
        background: var(--background);
        color: var(--black);
        padding:2vh 0;
    }
    body {
        font-family: DM Sans, sans-serif;
    } 

    p,
    a {
        font-size: 2rem;
        line-height: var(--medium);
    }
    a {
        color: var(--highlight);
    }
    input {
        
        height: 30px;
        background-color: #fff;
        border: 1px solid transparent;
        border-bottom-color: transparent;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom: 1px solid #f5f5f5;
        color: #2e2e2e;
        width: 100%;
        padding: 0;
        transition: all .4s;
        border-radius: 0;
        outline: none;
        &:hover{
            box-shadow: unset;
            border: 1px solid transparent;
            border-bottom-color: transparent;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            border-bottom: 1px solid #999;
            transition: all .4s;
        }
    }

    label, p, span {
        font-family: DM Sans,sans-serif;
    }
    label, input {
        cursor: pointer;
    }
`
