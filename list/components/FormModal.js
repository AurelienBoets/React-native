import {useState} from 'react';
import {Button, Modal, TextInput, View} from 'react-native';

const FormModal = props => {
  const {add, show} = props;
  const [text, setText] = useState('');
  const addText = item => {
    add(item);
  };

  return (
    <Modal visible={show}>
      <View>
        <TextInput
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholder="Item"
        />
        <Button title="Ajouter" onPress={() => addText(text)} />
      </View>
    </Modal>
  );
};

export default FormModal;
