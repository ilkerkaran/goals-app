import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

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
    <View>
      <TextInput
        value={text}
        placeholder="Enter your goal here!"
        onChangeText={onTextChangeHandler} />
      <View>
        <Button title="CANCEL" onPress={onPressCancel} />
        <Button title="ADD" onPress={onOKHandler} />
      </View>
    </View>
  )
}

export default goalInput;