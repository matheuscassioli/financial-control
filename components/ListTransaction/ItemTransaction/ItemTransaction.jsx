import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemTransaction = ({ data }) => {
    console.log(data)

    const date = new Date(data?.date);

    const formattedDate = date.toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        dateStyle: "short",
        timeStyle: "short",
    });

    return (
        <View style={styles.itemList}>
            <View
                style={styles.iconCategoryContainer}>
                <Text>dentro</Text>
            </View >

            <View style={styles.infosContainer}>
                <View>
                    <Text style={styles.dateContainer}>{formattedDate}</Text>
                    <Text style={styles.descriptionContainer}>{data.category}</Text>
                </View>

                <Text style={styles.valueContainer}>
                    {data.value}
                </Text>
            </View>
        </View>
    )
}

export default ItemTransaction

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: "#1E1E1E",
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    iconCategoryContainer: {
        backgroundColor: 'red',
        borderRadius: 35,
        width: '60',
        height: '60',
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infosContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        margin: 6,
        padding: 6,
    },
    valueContainer: {
        color: "green",
        fontWeight: "bold"
    },
    dateContainer: {
        fontSize: 12,
        color: 'white',
        opacity: '.7'
    },
    descriptionContainer: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
})