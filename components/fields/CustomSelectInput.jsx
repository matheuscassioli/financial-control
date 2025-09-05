import React, { useState } from 'react';
import { View, Text, Pressable, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DefaultStyledFields } from './DefaultStyledFields';

const CustomSelectInput = ({ label, value, onChange, options = [], placeholder = "Selecione" }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (item) => {
        onChange(item);
        setShowOptions(false);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <Pressable
                style={DefaultStyledFields.input}
                onPress={() => setShowOptions(true)}>
                <Text
                    style={value ? styles.valueText : styles.placeholderText}>
                    {value ? value : placeholder}
                </Text>
            </Pressable>

            <Modal visible={showOptions} transparent animationType="fade">
                <Pressable style={styles.modalOverlay} onPress={() => setShowOptions(false)}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { fontSize: 14, marginBottom: 4, color: '#444' },
    placeholderText: { color: '#999' },
    valueText: { color: '#000' },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        maxHeight: 300,
    },
    option: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});

export default CustomSelectInput;
