import React from 'react'
import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule } from "../components/schedule"
import { ttsgSchedule } from "../static/ttsgSchedule";
import { Heading } from "grommet";
import SubTitle from "../components/subtitle";
export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Carrom - Schedule" subTitleLevel="3" />
        <Heading level="5">Will be available soon..</Heading>     
    </Layout>    
)
