import styled from "styled-components";

export const Navstyled = styled.nav`

display:flex;
flex-direction: row;
justify-content: center;

li{
    list-style: none;
    border-right: solid 2px black;
    padding-right: 5px;
    padding-left: 5px;
}
ul{
    padding: 0;
}
li :first-of-type{
    border-left: solid 2px black;
}
`