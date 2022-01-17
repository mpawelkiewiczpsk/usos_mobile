import React, {useState, useEffect} from "react";
import lecturers from "../data/lecterers.json"
import { List, Searchbar } from 'react-native-paper';
import { ScrollView, SafeAreaView } from "react-native";


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

    const onChangeSearch = query => setFilter(query);

    const getData = () => {

        return [...new Set(list.filter(checkTeacher).concat(list.filter(checkSubjects)))];
    }


    return(
        <SafeAreaView>
            <ScrollView>
            <Searchbar
                placeholder="Wyszukaj"
                onChangeText={onChangeSearch}
                value={filter}
            />
            <List.Section title="Lecturers">
                {getData().map((item, index) =>
                    <List.Item key={index} title={item.teacher} />)}
            </List.Section>
            </ScrollView>
        </SafeAreaView>


    )

}


export default Lecturers;
