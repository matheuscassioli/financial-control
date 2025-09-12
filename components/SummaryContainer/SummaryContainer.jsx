import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { sharedStyles } from '../../styles/globals'

const SummaryContainer = () => {

  const { list } = useContext(TransactionsContext)

  const newData = {}

  list.forEach(item => {
    const category = item.category
    const value = parseFloat(item.value)

    if (newData[category]) {
      return newData[category] += value
    }
    return newData[category] = value
  })

  const finalyData = Object.keys(newData).map(category => ({
    category,
    value: newData[category]
  }))

  const ItemSummary = ({ item }) => {
    return (<View style={sharedStyles.itemList}>
      <View style={sharedStyles.infosContainer}>
        <Text style={sharedStyles.descriptionContainer}>
          {item?.category}
        </Text>
        <Text
          style={sharedStyles.valueContainer}>
          {item?.value}
        </Text>
      </View>
    </View>)
  }

  return (
    <View style={styles.summaryContainer}>
      <FlatList
        data={finalyData}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => <ItemSummary item={item} />}
        ListEmptyComponent={<Text>Não há resumo</Text>} />
    </View>
  )
}
export default SummaryContainer

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
  },
})