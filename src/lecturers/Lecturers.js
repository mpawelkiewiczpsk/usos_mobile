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

    const checkString = (value) => {
        return clearString(value).indexOf(clearString(filter)) >= 0
    }


    const filterList = (value) => {
        setFilter(value);
    }

    const getData = () => {

        let copyArray = [];

        list.forEach(item => {
            if(checkString(item.teacher)){
                copyArray.push(item)
            }else{
                item.subjects.forEach(subject => {
                    if(checkString(subject)){
                        copyArray.push(item)
                    }
                })
            }
        })

        return copyArray;
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
