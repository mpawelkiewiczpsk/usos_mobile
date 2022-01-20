import React, {useEffect, useState} from "react";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const DialogInfo = ({ data }) => {

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        data && setVisible(true);
    }, [data])

    return(
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>Subjects</Dialog.Title>
                  <Dialog.Content>
                      {data && data.map((item, index) => <Paragraph key={index}>{item}</Paragraph>)}
                  </Dialog.Content>
                  <Dialog.Actions>
                      <Button onPress={hideDialog}>Ok</Button>
                  </Dialog.Actions>
                </Dialog>
            </Portal>

    )

}



export default DialogInfo;
