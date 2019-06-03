import React from 'react';
import Layout from "../components/layout";
import Header from "../components/header";
import { Schedule } from "../components/schedule";
import { ttdmSchedule } from "../static/ttdmSchedule";
import SubTitle from "../components/subtitle";
export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Table Tennis Doubles(M) - Schedule" subTitleLevel="3" />   
        <Schedule teamSchedule={ttdmSchedule} />        
    </Layout>    
)
