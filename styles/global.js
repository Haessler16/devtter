import css from "styled-jsx/css"
import { fonts, colors, breakpoints } from "./theme"
import { addOpacityToColor } from "./utils"
const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: ${breakpoints.movile}) {
    main {
      height: 90vh;
      width: ${breakpoints.movile};
    }
  }
`
