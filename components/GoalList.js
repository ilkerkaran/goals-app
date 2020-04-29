import React from 'react';
import GoalListItem from './GoalListItem';
import { View, FlatList, StyleSheet } from 'react-native';

const goalList = ({ goals, onGoalDelete }) => {
  return (<View>
    <FlatList data={goals}
      keyExtractor={(item) => item.id.toString()}
      extraData={goals}
      renderItem={({ item }) => (<View style={styles.listItem}>
        <GoalListItem goal={item} onDelete={onGoalDelete} />
      </View>)} />
  </View>);
}

export default goalList;

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  }
});