import React from 'react'
import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule } from "../components/schedule"
import { ttsgSchedule } from "../static/ttsgSchedule";
export default () =>
(
    <Layout>
        <Header />
        <Schedule teamSchedule={ttsgSchedule} />        
    </Layout>    
)
