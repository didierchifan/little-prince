import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Font classes */


  /*https://www.joshwcomeau.com/css/custom-css-reset/*/
  
  /* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

:root {  
  --square-grid-size: 20px;
  --square-grid-size-mobile: 10px;
  
  --background-color: hsl(0deg 0% 90%);
  --wrapper-width: 1440px;
  --h1-title: 64px; 
  --h2-title: 32px;
  --text-description: 24px;
  --border-radius:32px;
  --fill-color: hsl(36, 41%, 79%); 
  --accent-color: hsla(20, 95%, 57%, 1);
  --active-color: hsl(0, 0%, 10%);
  --not-active-color: hsl(0, 0%, 100%); 
  --text-color-dark: hsl(0, 0%, 10%); 
  --text-color-light: hsl(0, 0%, 90%); 


  --shadow-color: 0deg 0% 50%;
  --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);

  background-color: var(--text-color-dark); 

  scroll-behavior:smooth;
}

body {


  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 7. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/* 10. added by me */

ul{
  list-style:none;
}

`;

export default GlobalStyles;
