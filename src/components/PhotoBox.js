import styled from "styled-components"

export default styled.div `
  height:100%;
  background: url(${props => (props.bg? props.bg : "../img/weather.jpg")});
  width:50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
