import React, {useState, useEffect} from "react";
import lecturers from "../data/lecterers.json"
import { List, TextInput } from 'react-native-paper';


const Lecturers = () => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState([]);

    const checkString = (value) => {
        return value.teacher.replace(/\s/g, '').toLowerCase().indexOf(filter) >= 0
    }

    useEffect(() => {
        setList(lecturers.list);
    }, [])

    const filterList = (value) => {
        setFilter(value);
        let tmpList = list.filter(checkString);

        setList(tmpList);

    }


    return(
        <>
            <TextInput
                label="Email"
                value={filter}
                onChangeText={filterList}
            />
            <List.Section title="Lecturers">
                {list.map((item, index) =>
                    <List.Item key={index} title={item.teacher} />)}
            </List.Section>
        </>


    )

}


export default Lecturers;
