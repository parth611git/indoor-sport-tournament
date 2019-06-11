import React from 'react';
import {Box} from 'grommet/components/Box';
import {Heading} from 'grommet/components/Heading';
import {Link} from "gatsby"
export default () =>
(
    <Box direction="column" animation="zoomIn" margin="small">
        <Box direction="column">
            <GameCard gameName="Table Tennis - Single (M)" linkTo="/ttsm"/>
            <GameCard gameName="Table Tennis - Doubles (M)" linkTo="/ttdm" />
            <GameCard gameName="Table Tennis - Single (F)" linkTo="/ttsg"/>
            <GameCard gameName="Carrom" linkTo="/carrom"/>
            <GameCard gameName="Chess" linkTo="/chess"/>
            
        </Box>
    </Box>
) 

const GameCard = props => (
    <Box width="large" align="center" background="#afc6d6" width="100%"  margin="small" pad="small" round="small">
        <Link to={props.linkTo} style={{ textDecoration: 'none',color:'#618fb9' }}>
        <Heading level='3' margin='small' size='medium' >{props.gameName}</Heading></Link>
    </Box>
)