import React from "react";
import styled from 'styled-components'

const StyledLink = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: gray;
    :hover{
        color: #262627;
    }
`

export default (props) => <StyledLink {...props} />