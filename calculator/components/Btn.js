const {View, StyleSheet, Text, Pressable} = require('react-native');

const Btn = props => {
  const styles = StyleSheet.create({
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: 80,
      height: 80,
    },
    operator: {
      backgroundColor: 'gray',
      color: 'white',
      borderRadius: 5,
    },
    number: {
      borderRadius: 50,
      backgroundColor: 'white',
    },
    btnOperator: {
      color: 'white',
    },
    btnNumber: {
      color: 'black',
    },
  });

  const press = () => {
    if (props.func) {
      props.func(props.btn);
    } else if (props.funcNoParam) {
      props.funcNoParam();
    }
  };
  return (
    <Pressable onPress={press}>
      <View
        style={[
          styles.btnContainer,
          props.style === 'operator' ? styles.operator : styles.number,
        ]}>
        <Text
          style={
            props.style === 'operator' ? styles.btnOperator : styles.btnNumber
          }>
          {props.btn}
        </Text>
      </View>
    </Pressable>
  );
};

export default Btn;
