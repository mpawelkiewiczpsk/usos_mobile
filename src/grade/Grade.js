import React from "react";
import {DataTable, Text, useTheme} from "react-native-paper";

const data = [
    {
        id:1,
        subject: 'Aplikacje Mobilne',
        degree: 2
    },
    {
        id:2,
        subject: 'Systemy Operacyjne',
        degree: 3
    },
    {
        id:3,
        subject: 'Bazy danych 1',
        degree: 5
    }
]

const Grade = () => {

    const { colors } = useTheme();


    return(
            <DataTable>
                <DataTable.Header style={{backgroundColor: colors.background}}>
                    <DataTable.Title style={{flex: 1, justifyContent: 'flex-start'}}>Id</DataTable.Title>
                    <DataTable.Title style={{flex: 3, justifyContent: 'flex-start'}} numeric>Subject</DataTable.Title>
                    <DataTable.Title style={{flex: 1, justifyContent: 'flex-start'}} numeric>Degree</DataTable.Title>
                </DataTable.Header>

                {data.map((item, index) => <DataTable.Row key={index}>
                    <DataTable.Cell style={{flex: 1}}>{item.id}</DataTable.Cell>
                    <DataTable.Cell style={{flex: 3}}>{item.subject}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1, justifyContent: 'flex-start'}} numeric>
                        <Text style={item.degree === 2 && { color: colors.danger, fontWeight: 'bold' }}>{item.degree}</Text>
                    </DataTable.Cell>
                </DataTable.Row>)}

            </DataTable>
    )

}


export default Grade;
