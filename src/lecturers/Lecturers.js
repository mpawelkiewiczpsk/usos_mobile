import React, {useState, useEffect} from "react";
import lecturers from "../data/lecterers.json"
import { List, Searchbar } from 'react-native-paper';
import { ScrollView, SafeAreaView } from "react-native";
import DialogInfo from "../components/DialogInfo";


const Lecturers = () => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState('');
    const [data, setData] = useState(null);

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

    const displayInfo = (item) => {
        setData(item.subjects);
    }


    return(
        <SafeAreaView>
            <DialogInfo data={data}/>
            <ScrollView>
            <Searchbar
                placeholder="Wyszukaj"
                onChangeText={onChangeSearch}
                value={filter}
            />
            <List.Section title="Lecturers">
                {getData().map((item, index) =>
                    <List.Item key={index} title={item.teacher} onPress={() => displayInfo(item)} />)}
            </List.Section>
            </ScrollView>
        </SafeAreaView>


    )

}


export default Lecturers;
