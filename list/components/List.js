import {View, Button, FlatList, Text, StyleSheet} from 'react-native';
import FormModal from './FormModal';
import {useRef, useState} from 'react';

const List = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const addItem = text => {
    setList([...list, text]);
    setShow(!show);
  };

  const hide = () => {
    setShow(!show);
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    bgPurple: {
      backgroundColor: '#7005f2',
      marginTop: 10,
      padding: 5,
      borderRadius: 5,
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Button title="Ajouter objet" onPress={() => setShow(!show)} />
      <FormModal show={show} add={addItem} hide={hide} />
      <FlatList
        data={list}
        renderItem={itemData => {
          return (
            <View>
              <Text style={styles.bgPurple}>{itemData.item}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  );
};

export default List;
