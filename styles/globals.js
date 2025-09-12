import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
    itemList: {
        backgroundColor: "#1E1E1E",
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 10,
        color: "white",
        fontSize: 16,
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
    descriptionContainer: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
});
