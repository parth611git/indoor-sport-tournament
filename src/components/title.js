import React from 'react';
import { Heading } from 'grommet/components/Heading';
import { Box } from 'grommet/components/Box';
 export default (props) =>
 (
     //<Box align="center" pad="small" margin="xxsmall">
          <Heading alignSelf="center" level={props.level} pad="xsmall" margin="xxsmall"  >{props.title}</Heading>
     //</Box>

   // <Box direction="row" >
   //    <Box><Link to="/"><Home size="medium" style={{"margin":"10px"}}/></Link></Box>
   //    <Title level="2" title="iBASEt Sports Tournament"/>
   // </Box>
 )