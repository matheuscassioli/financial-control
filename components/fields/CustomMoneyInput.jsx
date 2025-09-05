import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { DefaultStyledFields } from './DefaultStyledFields';

const CustomMoneyInput = ({ label, value, onChangeText, placeholder = "R$ 0,00" }) => {

    const handleChange = (text) => {
        let cleaned = text.replace(/\D/g, '');
        let numberValue = (parseInt(cleaned || '0', 10) / 100).toFixed(2);
        const formatted = numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
        onChangeText(formatted);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={DefaultStyledFields.input}
                placeholder={placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={handleChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { fontSize: 14, marginBottom: 4, color: '#444' },
});

export default CustomMoneyInput;
