import * as React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Dialog, Portal } from 'react-native-paper';

const AddNewOpinion = ({ saveData }) => {

    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const save = () => {
        saveData(title);
        setVisible(false);
        setTitle('');
    }

    return (
            <View>
                <Button mode="contained" onPress={showDialog}>Add opinion</Button>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                mode="outlined"
                                label="Title"
                                value={title}
                                onChangeText={setTitle}
                                style={{marginBottom: 15}}
                            />
                            <TextInput
                                label="Description"
                                mode="outlined"
                                numberOfLines={6}
                                multiline={true}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Cancel</Button>
                            <Button onPress={save}>Save</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
    );
};

export default AddNewOpinion;
