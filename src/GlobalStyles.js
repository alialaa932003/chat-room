import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    /* Indigo */
    --color-brand-50: #fcf8ff;
    --color-brand-100: #7553eb1c;
    --color-brand-200: #EEEEF8;
    --color-brand-500: #DADBFE;
    --color-brand-600: #7678ed;
    --color-brand-700: #5b21b6;
    --color-brand-800: #4c1c95;
    --color-brand-900: #3c2b7d;

    /* secondary */
    /* --color-second-50: #fcf8ff;
    --color-second-100: #7553eb1c;
    --color-second-200: #EDEDF7;
    --color-second-500: #DADBFE; */
    --color-second-600: #FE7A55;

    /* Grey */
    --color-grey-0: #fff;
    --color-grey-20: #f9fafc;
    --color-grey-50: #f5f5f5;
    --color-grey-100: #d9d9d9;
    --color-grey-200: #d4d4d4;
    --color-grey-300: #a1a1a1;
    --color-grey-400: #898787;
    --color-grey-500: #41413f;
    --color-grey-600: #262625;
    --color-grey-700: #202022;

    --radius-sm:.5rem;
    --radius-md:1rem;
    --radius-lg:1.5rem;
    --radius-xl:2.5rem;
    
    --transition-sm: 0.2s all ease;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
    --image-grayscale: 10%;
    --image-opacity: 90%;
}

span,
a,
button {
    display: inline-block;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    text-transform: capitalize;
    /* word-break: break-word; */
}

html {
    font-size: 62.5%;
}

body {
    font-family: "poppins";
    color: var(--color-grey-700);
    font-weight: 400;
    min-height: 100dvh;
    line-height: 1.5;
    font-size: 1.4rem;
    position: relative;
    overflow-x: hidden;
}


::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 2px grey;  */
    border-radius: 10px;
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--color-grey-500);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-600);
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
    background: none;
    border: none;
}

*:disabled {
    cursor: not-allowed;
}

select:disabled,
input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
}

input:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
    line-height: 1;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    /* hyphens: auto; */
    margin: 0;
}

img {
    max-width: 100%;
    width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/*********************************************
 animations
*********************************************/

.animated {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.fade {
    -webkit-animation-name: fade;
    animation-name: fade;
}
@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
.fadeDown {
    -webkit-animation-name: fadeDown;
    animation-name: fadeDown;
}
@keyframes fadeDown {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadeLeft {
    -webkit-animation-name: fadeLeft;
    animation-name: fadeLeft;
}
@keyframes fadeLeft {
    0% {
        opacity: 0;
        transform: translatex(30px);
    }

    100% {
        opacity: 1;
        transform: translatex(0);
    }
}

.fadeUp {
    -webkit-animation-name: fadeUp;
    animation-name: fadeUp;
}
@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
/***********responsive *********** */
@media (max-width:650px){
    html{
        font-size: 53%;
    }
}
`;
export default GlobalStyle;
