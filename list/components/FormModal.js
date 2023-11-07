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
      marginBottom: 25,
    },
    container: {
      padding: 20,
      marginTop: '70%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    btnContainer: {
      flex: 1,
      margin: 5,
    },
    inputText: {
      borderWidth: 1,
      borderRadius: 10,
      width: '80%',
      alignSelf: 'center',
      borderColor: '#d9d9d9',
    },
  });

  return (
    <Modal visible={show}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../img/panier.png')} />
        <TextInput
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholder="Item"
          style={styles.inputText}
        />
        <View style={styles.row}>
          <View style={styles.btnContainer}>
            <Button title="Ajouter" onPress={() => addText(text)} />
          </View>
          <View style={styles.btnContainer}>
            <Button title="Retour" color={'red'} onPress={props.hide} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FormModal;
