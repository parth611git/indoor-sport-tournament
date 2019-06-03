import React from 'react';

import {Tab, Tabs, Box} from 'grommet';
import {FormNext} from 'grommet-icons';
import Layout from "../components/layout"
import Header from "../components/header"
import SubTitle from "../components/subtitle"
import { gamerules } from "../static/gamerules";

export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Rules" subTitleLevel="3"/>       
        <RuleTab key="rules"/>        
    </Layout>
)

const RuleTab  = () =>
{
    let ruleTab = gamerules.map((game, index) => {        
        let detailRules = game.rules.map((rule,rIndex)=>{                        
            return(<Box key={index+''+rIndex} direction="row" pad="small"><FormNext size="medium" /> {rule}</Box>);
        });        
        return (<Tab title={game.gameName} key={index}> {detailRules} </Tab>);        
    });     
    return <Tabs height='medium' flex='grow' alignSelf='center' key="rulesTab">{ruleTab}</Tabs>;
}