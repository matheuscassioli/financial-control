import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'

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

  return (
    <View style={styles.summaryContainer}>
      <Text style={{ color: 'red' }}>
        SummaryContainer
      </Text>

      <FlatList
        data={finalyData}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <Text>{item.category}: {item.value}</Text>
        )}
        ListEmptyComponent={<Text>Não há resumo</Text>}
      />
    </View>
  )
}
export default SummaryContainer

const styles = StyleSheet.create({
  summaryContainer: {
    color: "red",
    flex: 1,
    backgroundColor: "yellow"
  }
})