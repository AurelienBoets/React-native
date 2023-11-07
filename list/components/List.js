import {
  View,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import FormModal from './FormModal';
import {useRef, useState} from 'react';

const List = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const addItem = text => {
    setList([...list, text]);
    isShow();
  };

  const isShow = () => {
    setShow(!show);
  };

  const remove = index => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    console.log(index);
    console.log(newList);
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
      <Button title="Ajouter objet" onPress={() => isShow()} />
      <FormModal show={show} add={addItem} hide={isShow} />
      <FlatList
        data={list}
        renderItem={itemData => {
          return (
            <View>
              <Pressable onPress={() => remove(itemData.index)}>
                <Text style={styles.bgPurple}>{itemData.item}</Text>
              </Pressable>
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
