import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const goalInput = ({ onPressOK, onPressCancel }) => {
  const [text, setText] = useState('');


  const onTextChangeHandler = (text) => {
    setText(text);
  }
  const onOKHandler = () => {
    onPressOK({ id: Math.random(), title: text })
    setText('');
  }

  return (
    <View style={styles.goalInput}>
      <TextInput
        style={styles.text}
        value={text}
        placeholder="Enter your goal here!"
        onChangeText={onTextChangeHandler} />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={onPressCancel} /></View>
        <View style={styles.button}><Button title="ADD" color="green" onPress={onOKHandler} /></View>
      </View>
    </View>
  )
}

export default goalInput;


const styles = StyleSheet.create({
  goalInput: {
    width: "80%"
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    flex: 1,
    marginHorizontal: 10
  },
  text: {
    fontSize: 48
  }
});