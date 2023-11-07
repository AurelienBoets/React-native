import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

const FormModal = props => {
  const {add, show} = props;
  const [text, setText] = useState('');
  const addText = item => {
    add(item);
  };

  const styles = StyleSheet.create({
    img: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    container: {
      padding: 20,
      marginTop: '70%',
    },
    row: {
      flexDirection: 'row',
    },
    cancelBtn: {},
  });

  return (
    <Modal visible={show}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../img/panier.png')} />
        <TextInput
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholder="Item"
        />
        <View style={styles.row}>
          <Button title="Retour" />
          <Button title="Ajouter" onPress={() => addText(text)} />
        </View>
      </View>
    </Modal>
  );
};

export default FormModal;
