import React from 'react';

import {Tab, Tabs, Box, Text, Heading} from 'grommet';
import {FormNext, FormSubtract} from 'grommet-icons';
import Layout from "../components/layout"
import Header from "../components/header"
import SubTitle from "../components/subtitle"
import { gamerules } from "../static/gamerules";
import { objectOf } from 'prop-types';

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
            if(rule instanceof Object)
            {
                return(<Box key={index+''+rIndex} direction="row" pad="small"><FormNext size="medium" />
                            <SubRule rules={rule} />
                        </Box>);
            }
            else
            {
                return(<Box key={index+''+rIndex} direction="row" pad="small"><FormNext size="medium" /> {rule}</Box>);
            }
        });        
        return (<Tab title={game.gameName} key={index}> {detailRules} </Tab>);        
    });     
    return <Tabs height='medium' flex='grow' alignSelf='center' key="rulesTab">{ruleTab}</Tabs>;
}

const SubRule = (props) =>
{
    let rule = props.rules;
    let subRulesDetails =  rule.subRules.map((sRule,srIndex) =>{
        return(<Box direction="row" pad="xxsmall" margin="xxsmall"><FormSubtract size="small" />{sRule}</Box>)
        //subRules.push(<Box key={"sr"+srIndex+props.rIndex+props.gameIndex}>{sRule}</Box>);
    });
    return <Box >{rule.subRuleName}{subRulesDetails}</Box>

}