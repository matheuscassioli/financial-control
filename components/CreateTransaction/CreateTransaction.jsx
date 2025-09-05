import React, { useState } from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native';
import CustomTextInput from '../../components/fields/CustomTextInput';
import CustomDateInput from '../../components/fields/CustomDateInput';
import CustomMoneyInput from '../../components/fields/CustomMoneyInput';
import CustomSelectInput from '../../components/fields/CustomSelectInput';

const CreateTransaction = () => {

    const categories = ['Alimentação', 'Transporte', 'Saúde', 'Lazer'];

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const createTransactionItem = (e) => {

        const obj = {
            name,
            value,
            date,
            category
        }

        console.log(obj, 'envia objeto para api fake')
    }

    return (
        <View style={styles.createTransactionContainer}>
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
            <CustomMoneyInput
                label="Valor"
                value={value}
                onChangeText={setValue}
            />
            <CustomDateInput
                label="Data"
                value={date}
                onChange={setDate}
            />
            <CustomSelectInput
                label="Categoria"
                value={category}
                onChange={setCategory}
                options={categories}
                placeholder="Selecione uma categoria"
            />

            <Pressable
                onPress={() => createTransactionItem()}
                style={styles.button}>
                <Text style={styles.text}>
                    Criar transação
                </Text>
            </Pressable>
        </View>
    )
}

export default CreateTransaction

const styles = StyleSheet.create({
    createTransactionContainer: {
        padding: 20,
        flex: '1',
        height: '100%',
        display: 'flex',
        gap: '10',
        justifyContent: 'center'
    },
    button: {
        marginVertical: 20,
        backgroundColor: 'purple',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});