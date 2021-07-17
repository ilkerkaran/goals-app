import React, { useState } from 'react'
import {
  Modal, Button, View, StyleSheet
} from 'react-native'
import GoalList from '../components/GoalList'
import GoalInput from '../components/GoalInput'

const INITIAL_GOALS = [{
  id: 1,
  title: 'Learn Docker'
},
{
  id: 2,
  title: 'Learn React Native'
}]
const main = () => {
  const [goals, setGoals] = useState(INITIAL_GOALS)
  const [isAddingActive, setIsAddingActive] = useState(false)

  const onModalOKHandler = (goal) => {
    setIsAddingActive(false)
    setGoals([...goals, goal])
  }

  const onModalCancelHandler = () => {
    setIsAddingActive(false)
  }

  const onAddGoalHandler = () => {
    setIsAddingActive(true)
  }

  const onGoalDeleteHandler = (id) => {
    setGoals(goals.filter((g) => g.id != id))
  }
  return (
    <View style={styles.main}>

      <Modal
        visible={isAddingActive}
        animationType="slide"
      >
        <View style={styles.modalFlex}>
          <GoalInput
            onPressOK={onModalOKHandler}
            onPressCancel={onModalCancelHandler}
          />
        </View>
      </Modal>
      <View>
        <View style={styles.button}>
          <Button
            onPress={onAddGoalHandler}
            title="ADD GOAL"
          />
        </View>
        <GoalList
          goals={goals}
          onGoalDelete={onGoalDeleteHandler}
        />
      </View>
    </View>

  )
}

export default main

const styles = StyleSheet.create({
  main: {
    marginVertical: 80,
    width: '80%'
  },
  modalFlex: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: '15%'
  }

})
