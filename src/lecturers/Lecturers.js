import React, {useState, useEffect} from "react";
import lecturers from "../data/lecterers.json"
import { List, TextInput } from 'react-native-paper';


const Lecturers = () => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setList(lecturers.list);
    }, [])

    const clearString = (value) => {
        return value.replace(/\s/g, '').toLowerCase();
    }

    const checkTeacher = (value) => {
        return clearString(value.teacher).indexOf(clearString(filter)) >= 0
    }

    const checkSubjects = (value) => {
        return clearString(value.subjects.join(",")).indexOf(clearString(filter)) >= 0
    }


    const filterList = (value) => {
        setFilter(value);
    }

    const getData = () => {

        return list.filter(checkTeacher) && list.filter(checkSubjects);
    }


    return(
        <>
            <TextInput
                label="Email"
                value={filter}
                onChangeText={filterList}
            />
            <List.Section title="Lecturers">
                {getData().map((item, index) =>
                    <List.Item key={index} title={item.teacher} />)}
            </List.Section>
        </>


    )

}


export default Lecturers;
