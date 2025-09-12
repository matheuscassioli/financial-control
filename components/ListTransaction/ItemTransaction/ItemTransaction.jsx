import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RenderIconTransaction from '../RenderIconTransaction/RenderIconTransaction'
import { sharedStyles } from '../../../styles/globals'

const ItemTransaction = ({ data }) => {
    const date = new Date(data?.date);

    const formattedDate = date.toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        dateStyle: "short",
        timeStyle: "short",
    });

    return (
        <View style={sharedStyles.itemList}>
            <RenderIconTransaction category={data?.category} />

            <View style={sharedStyles.infosContainer}>
                <View>
                    <Text style={styles.dateContainer}>{formattedDate}</Text>
                    <Text style={styles.descriptionContainer}>{data.category}</Text>
                </View>

                <Text style={sharedStyles.valueContainer}>
                    {data.value}
                </Text>
            </View>
        </View>
    )
}

export default ItemTransaction

const styles = StyleSheet.create({
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