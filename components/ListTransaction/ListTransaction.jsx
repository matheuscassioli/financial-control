import React, { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { FlatList, StyleSheet, View } from 'react-native'
import ItemTransaction from './ItemTransaction/ItemTransaction'

const ListTransaction = () => {

    const { list } = useContext(TransactionsContext)

    return (
        <View
            style={styles.TransactioContainer}>
            <FlatList
                data={list}
                renderItem={({ item }) => <ItemTransaction data={item} />}
                keyExtractor={item => item.id} />
        </View>
    )
}

export default ListTransaction

const styles = StyleSheet.create({
    TransactioContainer: {
        border: 'red solid 1px',
        color: "yellow",
        width: '100%',
    },
})