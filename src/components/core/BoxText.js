import React from 'react'
import styled from 'styled-components'

const BoxText = ({value}) => {
    return(
        <Container>
            <StyledText>
                {value}
            </StyledText>

        </Container>
    );
}
const Container = styled.View`
align-items: center;
justify-content: center;
margin-top: 40;
margin-right: 30;
margin-left: 30;
`;

const StyledText = styled.Text`
text-align: center
`;

export default BoxText;