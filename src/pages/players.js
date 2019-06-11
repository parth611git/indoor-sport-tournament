import React from 'react';
import {DataTable} from 'grommet/components/DataTable';
import {Box} from 'grommet/components/Box';
import {Text} from 'grommet/components/Text';
import { playerList } from "../static/playerList";
import {Like, Checkmark} from 'grommet-icons';
import Layout from "../components/layout"
import Header from "../components/header"
import SubTitle from "../components/subtitle"

export default () =>
(
    <Layout>
        <Header />
        <SubTitle subTitle="Player List" subTitleLevel="3" />        
    
        <Box align="center" >
            <DataTable border="bottom" 
                columns={[
                        {
                            property: 'No',
                            header: <Text>No</Text>,
                            primary: true,
                        },
                        {
                            property: 'Name',
                            header: <Text>Name</Text>                
                        },
                        {
                        property: 'TableTennisSingles',
                        header: 'Table Tennis Singles',
                        render: datum => (
                            <Box pad={{ vertical: 'xsmall' }}>
                                {datum.TableTennisSingles ? <Like size="medium" style={{"margin":"10px"}}/> : ''}
                            </Box>
                                ),
                            },
                        {
                            property: 'TableTennisDoubles',
                            header: 'Table Tennis Doubles',
                            render: datum => (
                                    <Box pad={{ vertical: 'xsmall' }}>
                                        {datum.TableTennisDoubles ? <Like size="medium" style={{"margin":"10px"}}/> : ''}
                                    </Box>
                                        ),
                        },
                        {
                            property: 'Chess',
                            header: 'Chess',
                            render: datum => (
                                <Box pad={{ vertical: 'xsmall' }}>
                                        {datum.Chess ? <Like size="medium" style={{"margin":"10px"}}/> : ''}
                                            </Box>
                                ),
                        },
                        {
                            property: 'Carrom',
                            header: 'Carrom',
                            render: datum => (
                                <Box pad={{ vertical: 'xsmall' }}>
                                        {datum.Carrom ? <Like size="medium" style={{"margin":"10px"}}/> : ''}
                                            </Box>
                                ),
                        },
                        {
                            property: 'NotInterested',
                            header: 'Not Interested',
                            render: datum => (
                                <Box pad={{ vertical: 'xsmall' }}>
                                        {datum.NotInterested ? <Like size="medium" style={{"margin":"10px"}}/> : ''}
                                            </Box>
                                ),
                        },
                        {
                            property: 'Volunteer',
                            header: 'Volunteer?',
                            render: datum => (
                                <Box pad={{ vertical: 'xsmall' }}>
                                        {datum.Volunteer=="Yes" ? <Checkmark size="medium" style={{"margin":"10px"}}/> : ''}
                                            </Box>
                                ),
                        },
                        ]}
                        data={playerList}
                />
            </Box>
    </Layout>
)

