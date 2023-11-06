import {View, Button, FlatList, Text} from 'react-native';
import FormModal from './FormModal';
import {useRef, useState} from 'react';

const List = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const addItem = text => {
    setList([...list, text]);
    setShow(!show);
  };
  return (
    <View>
      <Button title="Ajouter objet" onPress={() => setShow(!show)} />
      <FormModal show={show} add={addItem} />
      <FlatList
        data={list}
        renderItem={itemData => {
          return (
            <View>
              <Text>{itemData.item}</Text>
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
