import React, {useEffect, useState} from "react";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const DialogInfo = ({ data, hideDialogFromParent }) => {

    const [visible, setVisible] = useState(false);

    const hideDialog = () => hideDialogFromParent();

    useEffect(() => {

        data?.visible ? setVisible(true) : setVisible(false)

    },[data?.visible])

    return(
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>Subjects</Dialog.Title>
                  <Dialog.Content>
                      {data?.subjects && data?.subjects.map((item, index) => <Paragraph key={index}>{item}</Paragraph>)}
                  </Dialog.Content>
                  <Dialog.Actions>
                      <Button onPress={hideDialog}>Ok</Button>
                  </Dialog.Actions>
                </Dialog>
            </Portal>

    )

}



export default DialogInfo;
