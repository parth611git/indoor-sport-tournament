import React from 'react'
import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule } from "../components/schedule"
import { ttsmSchedule } from "../static/ttsmSchedule";
import SubTitle from "../components/subtitle"
export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Table Tennis Single(M) - Schedule" subTitleLevel="3" />   
        <Schedule teamSchedule={ttsmSchedule} />        
    </Layout>    
)
