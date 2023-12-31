/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from './components/Btn';

const App = () => {
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [display, setDisplay] = useState('');
  const [oldDisplay, setOldDisplay] = useState('');
  const [result, setResult] = useState('');

  function handleOperator(newOperator) {
    console.log(firstNumber);
    if (operator === '' && firstNumber !== '') {
      setOperator(newOperator);
      setOldDisplay(firstNumber);
    } else if (operator === '' && result !== '') {
      setFirstNumber(`${result}`);
      setOldDisplay(result);
      setOperator(newOperator);
      setResult('');
    } else if (firstNumber !== '' && lastNumber !== '') {
      const number = calcul();
      setFirstNumber(number);
      setOldDisplay(number);
      setOperator(newOperator);
      setDisplay('');
      setLastNumber('');
      setResult('');
    }
  }

  const handleNumber = number => {
    if (operator === '') {
      setResult('');
      setFirstNumber(newNumber => {
        setDisplay(newNumber + number);
        return newNumber + number;
      });
    } else if (result) {
      setOperator('');
      setFirstNumber(number);
      setDisplay(number);
      setLastNumber('');
      setOldDisplay('');
      setResult('');
    } else {
      setLastNumber(newNumber => {
        setDisplay(newNumber + number);
        return newNumber + number;
      });
    }
  };

  const handleRemove = () => {
    if (operator === '') {
      setFirstNumber(newNumber => {
        setDisplay(newNumber.slice(0, -1));
        return newNumber.slice(0, -1);
      });
    } else {
      setLastNumber(newNumber => {
        setDisplay(newNumber.slice(0, -1));
        return newNumber.slice(0, -1);
      });
    }
  };

  const handleReset = () => {
    setOperator('');
    setFirstNumber('');
    setLastNumber('');
    setResult(0);
    setDisplay('');
    setOldDisplay('');
  };

  const calcul = () => {
    if (firstNumber !== '' && lastNumber !== '') {
      let number;
      switch (true) {
        case operator === '+':
          setResult(parseFloat(firstNumber) + parseFloat(lastNumber));
          setDisplay(parseFloat(firstNumber) + parseFloat(lastNumber));
          number = parseFloat(firstNumber) + parseFloat(lastNumber);
          break;
        case operator === '-':
          setResult(parseFloat(firstNumber) - parseFloat(lastNumber));
          setDisplay(parseFloat(firstNumber) - parseFloat(lastNumber));
          number = parseFloat(firstNumber) - parseFloat(lastNumber);
          break;
        case operator === 'x':
          setResult(parseFloat(firstNumber) * parseFloat(lastNumber));
          setDisplay(parseFloat(firstNumber) * parseFloat(lastNumber));
          number = parseFloat(firstNumber) * parseFloat(lastNumber);
          break;
        case operator === '/':
          setResult(parseFloat(firstNumber) / parseFloat(lastNumber));
          setDisplay(parseFloat(firstNumber) / parseFloat(lastNumber));
          number = parseFloat(firstNumber) / parseFloat(lastNumber);
          break;
      }
      return number;
    }
  };

  const styles = StyleSheet.create({
    container: {
      padding: 5,
      flex: 1,
      backgroundColor: 'black',
    },
    display: {
      height: '30%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    result: {
      color: 'white',
      textAlign: 'right',
      fontSize: 30,
      marginBottom: 25,
      marginRight: 5,
    },
    title: {
      fontSize: 30,
      color: 'white',
      marginLeft: 10,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <View style={styles.display}>
        <Text style={styles.result}>{oldDisplay}</Text>
        <Text style={styles.result}>{display === '' ? '0' : display}</Text>
      </View>
      <View style={styles.row}>
        <Btn btn={'AC'} style={'operator'} funcNoParam={handleReset} />
        <Btn btn={'^'} style={'operator'} />
        <Btn btn={'%'} style={'operator'} />
        <Btn btn={'/'} style={'operator'} func={handleOperator} />
      </View>
      <View style={styles.row}>
        <Btn btn={'7'} style={'number'} func={handleNumber} />
        <Btn btn={'8'} style={'number'} func={handleNumber} />
        <Btn btn={'9'} style={'number'} func={handleNumber} />
        <Btn btn={'x'} style={'operator'} func={handleOperator} />
      </View>
      <View style={styles.row}>
        <Btn btn={'4'} style={'number'} func={handleNumber} />
        <Btn btn={'5'} style={'number'} func={handleNumber} />
        <Btn btn={'6'} style={'number'} func={handleNumber} />
        <Btn btn={'-'} style={'operator'} func={handleOperator} />
      </View>
      <View style={styles.row}>
        <Btn btn={'1'} style={'number'} func={handleNumber} />
        <Btn btn={'2'} style={'number'} func={handleNumber} />
        <Btn btn={'3'} style={'number'} func={handleNumber} />
        <Btn btn={'+'} style={'operator'} func={handleOperator} />
      </View>
      <View style={styles.row}>
        <Btn btn={'.'} style={'number'} func={handleNumber} />
        <Btn btn={'0'} style={'number'} func={handleNumber} />
        <Btn btn={'Del'} style={'number'} funcNoParam={handleRemove} />
        <Btn btn={'='} style={'operator'} funcNoParam={calcul} />
      </View>
    </View>
  );
};

export default App;
