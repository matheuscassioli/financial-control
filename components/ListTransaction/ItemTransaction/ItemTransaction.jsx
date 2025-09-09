import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemTransaction = ({ data }) => {
    console.log('data', data)

    return (
        <View style={styles.itemList}>

            <Text
                style={styles.iconCategoryContainer}>
                imagem
            </Text >

            <View style={styles.infosContainer}>
                <Text>
                    {data.category}
                </Text>

                <Text>
                    {data.value}
                </Text>
            </View>
        </View>
    )
}

export default ItemTransaction

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: "grey",
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    iconCategoryContainer: {
        backgroundColor: 'red',
        borderRadius: '50%',
        width: '70',
        height: '70',
        textAlign: "center",
        margin: 10,
        display: 'flex',
        alignItems: 'center'
    },
    infosContainer: {
        backgroundColor: 'yellow',
        flexDirection: 'row',
        width: '75%',
        alignItems: 'center',
        justifyContent: "space-between"
    }
})