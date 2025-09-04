import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDateInput = ({ label, value, onChange }) => {
    const [show, setShow] = useState(false);

    const handleChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) onChange(selectedDate);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <Pressable style={styles.input} onPress={() => setShow(true)}>
                <Text>{value ? value.toLocaleDateString() : 'Selecione a data'}</Text>
            </Pressable>
            {show && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    style={{ backgroundColor: 'grey', position: 'absolute', top: 10, color: 'white' }}
                    onChange={handleChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { fontSize: 14, marginBottom: 4, color: '#444' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
    },
});

export default CustomDateInput;
