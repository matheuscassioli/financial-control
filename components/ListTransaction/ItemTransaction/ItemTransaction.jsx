import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RenderIconTransaction from '../RenderIconTransaction/RenderIconTransaction'

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

            <RenderIconTransaction category={data?.category} />

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