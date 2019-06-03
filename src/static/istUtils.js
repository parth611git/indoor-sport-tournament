import {ttsmSchedule} from '../static/ttsmSchedule';
import {Box,Text,Heading,Stack} from 'grommet';
import React from 'react';
import layout from '../components/layout';
import {Trigger, Validate} from 'grommet-icons';

export const getConnections = (gameSchedule) =>
{
    let connections = [];
    let cnt =0;
    gameSchedule.forEach(( stageSchedule, sIndex) => {
        stageSchedule.matches.forEach((match,mIndex) =>
        {
            connections[cnt] = {};
            connections[cnt]["fromTarget"] = match.gameId;
            connections[cnt]["toTarget"] = match.connectTo;
            connections[cnt]["thickness"] = "xsmall";
            connections[cnt]["color"] = "neutral-3";
            cnt++;
        });
    });
    
    return connections;
}

export const getDiagramLayout = (gameSchedule) => {
    let diagramLayout = [];
    gameSchedule.map(( stageSchedule, sIndex) => {        
        let stageDiagram = stageSchedule.matches.map((match,mIndex) =>
        {
            return (<MatchCard match={match}/>)
        });        
        stageDiagram = <Box direction={stageSchedule.direction} key={stageSchedule.stage} margin="small">{stageDiagram}</Box>; 
        diagramLayout.push(stageDiagram);           
    });
    
    return <Box direction="column" align="center">{diagramLayout}</Box>;
}

const MatchCard = (props) =>{
    let match = props.match;
    return (<Box id={match.gameId}  margin="xsmall" width="100px" background="light-2" align="center" key={match.gameId} fill="horizontal">
                <Box direction="row">                    
                    <TeamCard team={match.team1} winner={match.winner} />
                    <Box  alignSelf="center"><Trigger size="small" style={{"margin":"5px"}}/></Box>
                    <TeamCard team={match.team2} winner={match.winner} />
                </Box>
            </Box>);
}

const TeamCard = (props) => {
    return(<Stack anchor="top-right">
                <Box alignSelf="center" margin="small" pad="small" background="light-5">{props.team}</Box>
                    {props.team==props.winner && <Box  background="light-2" round><Validate color="neutral-1" size="medium" style={{"margin":"5px"}}/></Box> }
            </Stack>)
}