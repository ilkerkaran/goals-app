import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const goalListItem = ({ goal, onDelete }) => {


  const onPressHandler = () => {
    onDelete(goal.id);
  }
  console.log('rendered ', goal)
  console.log('rendered for', goal.title)

  return (<TouchableOpacity activeOpacity={0.7} onPress={onPressHandler}>
    <View>
      <Text>{goal.title}</Text>
    </View>
  </TouchableOpacity>)
}


export default goalListItem;