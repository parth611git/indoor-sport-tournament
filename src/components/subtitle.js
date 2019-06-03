import React from 'react';
import {Box} from 'grommet/components/Box';
import Title from "../components/title"

export default (props) =>
(
    <Box align="center">
        <Title title={props.subTitle} level={props.subTitleLevel}/>
    </Box>
)