import React from 'react'
import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule } from "../components/schedule"
import { carromSchedule } from "../static/carromSchedule";
import SubTitle from "../components/subtitle";

export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Carrom - Schedule" subTitleLevel="3" /> 
        <Schedule teamSchedule={carromSchedule} />        
    </Layout>    
)
