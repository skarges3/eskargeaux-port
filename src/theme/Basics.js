import styled from 'styled-components'

export const Logo = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 1;
    text-align: center;
    padding-top: 6vh;
    img {
        width: 80%;
        margin: auto;
    }
`;

export const PageWrapper = styled.div`
    height: 100vh;
    background-color: #eee;
    display: grid;
    grid-template-columns: 16vw 1fr 1fr 1fr 6vh 6vh 1fr 1fr 6vh 6vh 6vh;
    grid-template-rows: 6vh 6vh 6vh 6vh 1fr 1fr 1fr 6vh 6vh 6vh 6vh;
    .logo {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    z-index: 1;
    text-align: center;
    img {
        width: 70%;
        margin: auto;
    }
    }
    .social {
        grid-column: 1 / 2;
        grid-row: 10 / 11;
        z-index: 1;
        text-align: center;
        img {
            width: 70%;
            margin: auto;
        }
    }

    .img {
        background-color: #222;
        background-size: cover;
        background-position: center;
        grid-column: 2 / 11;
        grid-row: 2 / 11;
        filter: brightness(0.8);
        z-index: 1;
    }
    .img {
        background-image: url('https://images.unsplash.com/photo-1518343619876-de7e89c672e4?ixlib=rb-0.3.5&s=b72c0c8892800c2b1fe42da64e05a750&auto=format&fit=crop&w=1650&q=80');

    }
    .img_mask {
        background-color: #222;
        grid-column: 2 / 11;
        grid-row: 2 / 11;
        z-index: 2;
        transform: rotateY(-90deg);
        transform-origin: 0;
    }

    .titlecard {
        background-color: rgb(243, 246, 247);
        grid-column: 1 / 5;
        grid-row: 4 / 9;
        box-shadow: 0px 0px 15px rgba(100,100,100,0.4);
        z-index: 2;
    }

    .title-desc{
        grid-column: 2 / 5;
        grid-row: 5 / 8;
        align-self: stretch;
        align-content: center;
        display: grid;
        z-index: 10;
        padding-right: 30%;

        p{
            line-height: 1.8;
        }
    }

    .page-title {
        grid-column: 1 / 2;
        grid-row: 5 / 8;
        z-index: 10;
        align-self: center;
        justify-self: center;
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 0.7em;
        span{
            display: block;
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
        }
        span::before {
            content:  " ";
            letter-spacing: -5px;
        }
    }

    .arrow-l, .arrow-r {
        background-color: rgb(243, 246, 247);
        z-index: 10;
        text-align: center;
        color: #222;
        font-size: 1.2em;
        align-content: center;
        text-align: center;
        cursor: pointer;

        &:hover {
            box-shadow: 0px 1px 15px 7px rgba(80, 80, 80, 0.384);
        }
        a {
            display: grid;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-items: center;
            z-index: 100;
        }
        
        a > span {
            display: block;
            width: 14px;
            height: 14px;
            border-right: 1px rgb(71, 71, 71) solid;
            border-bottom: 1px rgb(71, 71, 71) solid;
        }
    }

    .arrow-l{
        grid-area: 10 / 6 / 9 / 5;

        span {
            transform: rotate(-225deg);
            margin-left: 6px;
        }
    }

    .arrow-r{
        grid-area: 9 / 6 / 8 / 6;

        span {
            transform: rotate(-45deg);
            margin-right: 6px;
        }
        
    }

    .counter {
        grid-area: 11 / 9 / 9 / 11;
        background-color: rgba(0,0,0,0.4);
        color: white;
        margin: 0px 15px 15px 0px;
        border: solid 2px;
        border-color: rgba(255,255,255,0.2);
        display: grid;
        grid: 1fr 1fr / 1fr 1fr;
        z-index: 10;
        
        font-size: 1.2em;
        font-family: $serif-stack;
        .current {
            grid-area: 1 / 1 / 2 / 2;
            align-self: end;
            justify-self: end;
        }
        .total {
            grid-area: -1 / -1 / -2 / -2;
            align-self: start;
            justify-self: start;
        }
        .slash {
            grid-area: 1 / 1 / -1 / -1;
            align-self: center;
            justify-self: center;
            opacity: 0.2;
            font-size: 2em;
        }
    }

    .gridlines {
        z-index: 1;
        background-color: none;
        grid-area: 1 / 2 / 12 / 5;
        border-right: none;
        border-left: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        div {
            z-index: 1;
            background-color: none;
            grid-column: 1 / 2;
            border-right: $gridline;
            border-left: none;    
        }
    }

    .gridlines2 {
        z-index: 2;
        background-color: none;
        grid-area: 1 / 2 / 12 / 5;
        border-right: $gridline;
        border-left: $gridline;
    }

    .gridlines4 {
        z-index: 10;
        background-color: none;
        grid-area: 4 / 2 / 9 / 11;
        border-top: $gridline;
        border-bottom: $gridline;
    }

    .gridlines3 {
        z-index: 10;
        background-color: none;
        grid-area: 1 / 5 / 12 / 11;
        border-right: $gridline;
        border-left: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        div {
            z-index: 1;
            background-color: none;
            grid-column: 1 / 2;
            border-right: $gridline;
            border-left: none;    
        }
    }

    ul.nav {
        grid-column: 11 / 12;
        grid-row: 2 / 7;
        display: grid;
        padding: 0;
        align-content: space-between;
        z-index: 10;
        grid-gap: 20px;
        li {
            list-style: none;
            writing-mode: vertical-rl;
            text-transform: uppercase;
            font-size: 0.6em;
            letter-spacing: 5px;
            color: #aaa;
            padding-right: 2vh;
            border-right: 3px solid #fff;
            font-weight: bold;

        }
        li.active {
            color: #222;
            border-right: 3px solid #222;
        }
    }
`;