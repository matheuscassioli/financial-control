import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DefaultStyledFields } from './DefaultStyledFields';

const CustomDateInput = ({ label, value, onChange }) => {
    const [show, setShow] = useState(false);

    const handleChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) onChange(selectedDate);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={DefaultStyledFields.label}>{label}</Text>}
            <Pressable style={DefaultStyledFields.input} onPress={() => setShow(true)}>
                <Text style={{ color: value ? 'white' : "gray" }}>{value ? value.toLocaleDateString() : 'Selecione a data'}</Text>
            </Pressable>
            {show && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    style={{
                        backgroundColor: 'black',
                        position: 'absolute', top: 10, color: 'white'
                    }}
                    onChange={handleChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
});

export default CustomDateInput;
