import React from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native'

const goalListItem = ({ goal, onDelete }) => {
  const onPressHandler = () => {
    onDelete(goal.id)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPressHandler}
    >
      <View>
        <Text style={styles.text}>
          {goal.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default goalListItem

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})
