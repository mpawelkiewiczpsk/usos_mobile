import React, {useEffect, useState} from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {List} from "react-native-paper";
import AddNewOpinion from "../components/AddNewOpinion"


const opinionsList = [{
    id: 1,
    title: "Opinia 1"
    },
    {
        id: 2,
        title: "Opinia 2"
    },
    {
        id: 3,
        title: "Opinia 3"
    }]

const Opinions = () => {

    const [opinions, setOpinions] = useState(opinionsList)

    const saveData = (data) => {
        setOpinions([...opinions, {
            id: opinions.length + 1,
            title: data
        }]);
    }

    return(
        <SafeAreaView>
            <ScrollView>
            <List.Section>
                {opinions.map(opinion => <List.Item key={opinion.id} title={opinion.title} />)}

            </List.Section>
                <AddNewOpinion saveData={saveData} />
            </ScrollView>
        </SafeAreaView>


    )

}


export default Opinions;
