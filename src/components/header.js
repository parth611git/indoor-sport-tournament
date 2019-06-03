import React from 'react';

import {Box} from 'grommet/components/Box';
import {Link} from "gatsby"
import {Home,Group,Notes,Gallery} from 'grommet-icons';
import Title from "../components/title"

export default () =>
(

    <Box align="center"  animation="fadeIn" background="#f3d97c">
        <Box direction="column">
            <Box direction="row" >
                <Box><Link to="/"><Home size="medium" style={{"margin":"10px"}}/></Link></Box>
                <Title level="2" title="iBASEt Sports Tournament"/>
            </Box>
            
        </Box>
        <Box direction="row" animation="slideLeft">
            <Box><Link to="/players"><Group size="medium" style={{"margin":"10px"}} alt="Players"/></Link></Box>
            <Box><Link to="/rules"><Notes size="medium" style={{"margin":"10px"}}/></Link></Box>
            <Box><Link to="/"><Gallery size="medium" style={{"margin":"10px"}}/></Link></Box>
        </Box>
    </Box>
    
   

)