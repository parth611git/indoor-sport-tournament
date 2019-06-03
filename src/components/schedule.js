import React from 'react';
import { Diagram, Stack } from 'grommet';
import {Box,Text,Heading} from 'grommet';
import {Trigger, Emoji} from 'grommet-icons';
import style from "./schedule.module.css"

const Schedule = (props) => {
    return (<Stack guidingChild={1} className={style.schedule}> 
                <Diagram connections={getConnections(props.teamSchedule)} />
                <DiagramLayout gameSchedule={props.teamSchedule} />
            </Stack>) ;
};

const DiagramLayout = (props) => {

    let stageMatches = [];
    let scheduleLayout = [];
    props.gameSchedule[0].matches.map((match,mIndex) => {
        
        stageMatches.push(<MatchCard match={match} key={match.gameName}/>);

        if(match.startNewStage == "Y")
        {
            scheduleLayout.push(<Box direction="row" key={match.gameId+''+mIndex} margin="small" pad="medium">{stageMatches}</Box>);
            stageMatches = [];
        }
    });
    let diagramLayout = <Box direction="column" align="center" key={props.gameSchedule[0].key}>{scheduleLayout}</Box>;

    return diagramLayout;
}

const MatchCard = (props) =>{
    let match = props.match;
    return (<Box id={match.gameId} alignContent="center" margin="xxsmall" pad="xsmall" background="dark-3" key={match.gameId}  >
                <Box direction="column">                    
                    <TeamCard team={match.team1} winner={match.winner} />
                    <Box  alignSelf="center"><Trigger size="small" style={{"margin":"5px"}}/></Box>
                    <TeamCard team={match.team2} winner={match.winner} />
                </Box>
            </Box>);
}

const TeamCard = (props) => {
    return(<Stack anchor="top-right">
                <Box alignSelf="center"  pad="xsmall" background="light-5">{props.team}</Box>
                    {props.team==props.winner && <Box  background="light-2" round><Emoji color="neutral-1" size="17px" /></Box> }
            </Stack>)
}

const getConnections = (gameSchedule) =>
{
    let connections = [];
    let cnt =0;
    gameSchedule[0].matches.forEach((match,mIndex) =>
    {
                 connections[cnt] = {};
                 connections[cnt]["fromTarget"] = match.gameId;
                 connections[cnt]["toTarget"] = match.connectTo;
                 connections[cnt]["thickness"] = "xsmall";
                 connections[cnt]["color"] = "neutral-3";
                 //connections[cnt]["offset"] = "large";
                 cnt++;
    });
    
    return connections;
}

export { Schedule }; 